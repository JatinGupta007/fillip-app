const express = require("express");
const router = express.Router();

const {
  createAuditSubmission,
  createCustomPlanSubmission,
  getAllSubmissions,
  getSubmissionById,
  updateSubmissionStatus,
  deleteSubmission,
} = require("../controllers/submissionController");

const { validateAudit, validateCustomPlan } = require("../middlewares/validate");

/* ─────────────────────────────────────────
   Public routes (called from frontend)
───────────────────────────────────────── */

// Free Audit form submission
router.post("/audit", validateAudit, createAuditSubmission);

// Custom Plan form submission
router.post("/custom-plan", validateCustomPlan, createCustomPlanSubmission);

/* ─────────────────────────────────────────
   Admin routes
───────────────────────────────────────── */

// GET /api/submissions?formType=FREE_AUDIT&status=PENDING&page=1&limit=20
router.get("/", getAllSubmissions);

// GET /api/submissions/:id
router.get("/:id", getSubmissionById);

// PATCH /api/submissions/:id/status  — body: { status: "REVIEWED" }
router.patch("/:id/status", updateSubmissionStatus);

// DELETE /api/submissions/:id
router.delete("/:id", deleteSubmission);

module.exports = router;
