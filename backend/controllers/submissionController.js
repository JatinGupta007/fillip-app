const Submission = require("../models/Submission");
const { sendSubmissionEmail } = require("../services/emailService");

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

// Normalise field names from both forms into the unified schema shape
const normalisePayload = (formType, body) => {
  if (formType === "FREE_AUDIT") {
    return {
      formType,
      appDetails: {
        appName: body.appName,
        appLink: body.appLink || null,
        platform: body.platform,
        category: body.category,
        downloads: body.downloads || null,
        mau: null,
        rating: null,
      },
      marketing: {
        primaryGoal: body.primaryGoal,
        budget: body.monthlyBudget,           // auditForm key → unified key
        channels: body.currentChannels || null,
        targetGeo: body.targetCountries || null,
        services: null,
        startDate: body.timeline || null,
      },
      contact: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone || null,
        company: body.company || null,
      },
    };
  }

  // CUSTOM_PLAN
  return {
    formType,
    appDetails: {
      appName: body.appName,
      appLink: body.appLink || null,
      platform: body.platform,
      category: body.category,
      downloads: body.downloads || null,
      mau: body.mau || null,
      rating: body.rating || null,
    },
    marketing: {
      primaryGoal: body.primaryGoal,
      budget: body.budget,
      channels: body.channels || null,
      targetGeo: body.targetGeo || null,
      services: body.services || null,
      startDate: body.startDate || null,
    },
    contact: {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone || null,
      company: body.company || null,
    },
  };
};

/* ─────────────────────────────────────────
   POST  /api/submissions/audit
───────────────────────────────────────── */
const createAuditSubmission = async (req, res) => {
  try {
    const payload = normalisePayload("FREE_AUDIT", req.body);
    payload.ipAddress = req.ip || null;

    const doc = await Submission.create(payload);

    // Send email (non-blocking — failure won't fail the request)
    sendSubmissionEmail(doc)
      .then(async () => {
        doc.emailSent = true;
        await doc.save();
      })
      .catch((err) =>
        console.error("⚠️  Audit email send failed:", err.message)
      );

    return res.status(201).json({
      success: true,
      message: "Audit request submitted successfully!",
      data: { id: doc._id, formType: doc.formType, createdAt: doc.createdAt },
    });
  } catch (error) {
    console.error("createAuditSubmission error:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(422).json({ success: false, message: "Validation failed", errors });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* ─────────────────────────────────────────
   POST  /api/submissions/custom-plan
───────────────────────────────────────── */
const createCustomPlanSubmission = async (req, res) => {
  try {
    const payload = normalisePayload("CUSTOM_PLAN", req.body);
    payload.ipAddress = req.ip || null;

    const doc = await Submission.create(payload);

    sendSubmissionEmail(doc)
      .then(async () => {
        doc.emailSent = true;
        await doc.save();
      })
      .catch((err) =>
        console.error("⚠️  Custom plan email send failed:", err.message)
      );

    return res.status(201).json({
      success: true,
      message: "Custom plan request submitted successfully!",
      data: { id: doc._id, formType: doc.formType, createdAt: doc.createdAt },
    });
  } catch (error) {
    console.error("createCustomPlanSubmission error:", error);

    if (error.name === "ValidationError") {
      const errors = Object.values(error.errors).map((e) => e.message);
      return res.status(422).json({ success: false, message: "Validation failed", errors });
    }
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* ─────────────────────────────────────────
   GET  /api/submissions
   Query params: formType, status, page, limit
───────────────────────────────────────── */
const getAllSubmissions = async (req, res) => {
  try {
    const { formType, status, page = 1, limit = 20 } = req.query;

    const filter = {};
    if (formType) filter.formType = formType.toUpperCase();
    if (status) filter.status = status.toUpperCase();

    const skip = (Number(page) - 1) * Number(limit);

    const [docs, total] = await Promise.all([
      Submission.find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(Number(limit))
        .lean(),
      Submission.countDocuments(filter),
    ]);

    return res.json({
      success: true,
      data: docs,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (error) {
    console.error("getAllSubmissions error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* ─────────────────────────────────────────
   GET  /api/submissions/:id
───────────────────────────────────────── */
const getSubmissionById = async (req, res) => {
  try {
    const doc = await Submission.findById(req.params.id).lean();
    if (!doc) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }
    return res.json({ success: true, data: doc });
  } catch (error) {
    console.error("getSubmissionById error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* ─────────────────────────────────────────
   PATCH  /api/submissions/:id/status
   Body: { status: "REVIEWED" | "CONTACTED" | "CLOSED" }
───────────────────────────────────────── */
const updateSubmissionStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["PENDING", "REVIEWED", "CONTACTED", "CLOSED"];

    if (!status || !allowed.includes(status.toUpperCase())) {
      return res.status(400).json({
        success: false,
        message: `Status must be one of: ${allowed.join(", ")}`,
      });
    }

    const doc = await Submission.findByIdAndUpdate(
      req.params.id,
      { status: status.toUpperCase() },
      { new: true, runValidators: true }
    ).lean();

    if (!doc) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }

    return res.json({ success: true, message: "Status updated", data: doc });
  } catch (error) {
    console.error("updateSubmissionStatus error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

/* ─────────────────────────────────────────
   DELETE  /api/submissions/:id
───────────────────────────────────────── */
const deleteSubmission = async (req, res) => {
  try {
    const doc = await Submission.findByIdAndDelete(req.params.id);
    if (!doc) {
      return res.status(404).json({ success: false, message: "Submission not found" });
    }
    return res.json({ success: true, message: "Submission deleted" });
  } catch (error) {
    console.error("deleteSubmission error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports = {
  createAuditSubmission,
  createCustomPlanSubmission,
  getAllSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  deleteSubmission,
};
