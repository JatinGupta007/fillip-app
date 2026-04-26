/* ─────────────────────────────────────────
   Lightweight validation middleware
   (no external library needed)
───────────────────────────────────────── */

const isEmpty = (v) => !v || String(v).trim() === "";

const sendError = (res, errors) =>
  res.status(422).json({ success: false, message: "Validation failed", errors });

/* Validate Free Audit form payload */
const validateAudit = (req, res, next) => {
  const b = req.body;
  const errors = [];

  // Step 1 — App Info
  if (isEmpty(b.appLink)) errors.push("App Store / Play Store link is required");
  if (isEmpty(b.appName)) errors.push("App name is required");
  if (!["iOS", "Android", "Both"].includes(b.platform))
    errors.push("Platform must be iOS, Android, or Both");
  if (isEmpty(b.category)) errors.push("App category is required");

  // Step 2 — Goals & Budget
  if (isEmpty(b.primaryGoal)) errors.push("Primary goal is required");
  if (isEmpty(b.monthlyBudget)) errors.push("Monthly budget is required");

  // Step 3 — Contact
  if (isEmpty(b.fullName)) errors.push("Full name is required");
  if (isEmpty(b.email) || !/^\S+@\S+\.\S+$/.test(b.email))
    errors.push("A valid email is required");

  if (errors.length) return sendError(res, errors);
  next();
};

/* Validate Custom Plan form payload */
const validateCustomPlan = (req, res, next) => {
  const b = req.body;
  const errors = [];

  // Step 1 — App Details
  if (isEmpty(b.appName)) errors.push("App name is required");
  if (!["iOS", "Android", "Both"].includes(b.platform))
    errors.push("Platform must be iOS, Android, or Both");
  if (isEmpty(b.category)) errors.push("App category is required");
  if (isEmpty(b.downloads)) errors.push("Total downloads is required");

  // Step 2 — Marketing Needs
  if (isEmpty(b.primaryGoal)) errors.push("Primary goal is required");
  if (isEmpty(b.budget)) errors.push("Monthly budget is required");

  // Step 3 — Quote Contact
  if (isEmpty(b.fullName)) errors.push("Full name is required");
  if (isEmpty(b.email) || !/^\S+@\S+\.\S+$/.test(b.email))
    errors.push("A valid email is required");

  if (errors.length) return sendError(res, errors);
  next();
};

module.exports = { validateAudit, validateCustomPlan };
