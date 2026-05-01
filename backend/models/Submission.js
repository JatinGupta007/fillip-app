const mongoose = require("mongoose");

/* ─────────────────────────────────────────
   Shared sub-schemas
───────────────────────────────────────── */

// Contact info is common to both forms
const contactSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: { type: String, trim: true, default: null },
    company: { type: String, trim: true, default: null },
  },
  { _id: false }
);

// App details sub-schema
const appDetailsSchema = new mongoose.Schema(
  {
    appName: { type: String, required: true, trim: true },
    appLink: { type: String, trim: true, default: null },
    platform: {
      type: String,
      enum: ["iOS", "Android", "Both"],
      required: true,
    },
    category: { type: String, required: true, trim: true },
    downloads: { type: String, trim: true, default: null }, // kept as string (e.g. "10,000")
    mau: { type: String, trim: true, default: null },       // Monthly Active Users (custom-plan only)
    rating: { type: String, trim: true, default: null },    // App Store Rating (custom-plan only)
  },
  { _id: false }
);

// Marketing goals sub-schema (fields are a superset of both forms)
const marketingSchema = new mongoose.Schema(
  {
    primaryGoal: { type: String, required: true, trim: true },
    budget: { type: String, required: true, trim: true },       // "monthlyBudget" normalised to "budget"
    channels: { type: String, trim: true, default: null },
    targetGeo: { type: String, trim: true, default: null },     // "targetCountries" normalised to "targetGeo"
    services: { type: String, trim: true, default: null },      // custom-plan only
    startDate: { type: String, trim: true, default: null },     // custom-plan only  (timeline/startDate)
  },
  { _id: false }
);

/* ─────────────────────────────────────────
   Main schema
───────────────────────────────────────── */
const submissionSchema = new mongoose.Schema(
  {
    // Which form generated this document
    formType: {
      type: String,
      enum: ["FREE_AUDIT", "CUSTOM_PLAN"],
      required: true,
      index: true,
    },

    // Embedded sub-documents
    appDetails: { type: appDetailsSchema, required: true },
    marketing: { type: marketingSchema, required: true },
    contact: { type: contactSchema, required: true },

    // Meta
    status: {
      type: String,
      enum: ["PENDING", "REVIEWED", "CONTACTED", "CLOSED"],
      default: "PENDING",
      index: true,
    },
    emailSent: { type: Boolean, default: false },
    ipAddress: { type: String, default: null },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
    versionKey: false,
  }
);

// Compound index — most common admin query
submissionSchema.index({ formType: 1, createdAt: -1 });

module.exports = mongoose.model("Submission", submissionSchema);
