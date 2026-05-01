const transporter = require("../config/mailer");

/* ─────────────────────────────────────────
   Shared HTML helpers
───────────────────────────────────────── */
const val = (v) => (v ? String(v).trim() : "—");

const row = (label, value) => `
  <tr>
    <td style="padding:8px 12px;font-weight:600;color:#475569;white-space:nowrap;width:200px;border-bottom:1px solid #f1f5f9;">${label}</td>
    <td style="padding:8px 12px;color:#1e293b;border-bottom:1px solid #f1f5f9;">${val(value)}</td>
  </tr>`;

const section = (title, color, rows) => `
  <div style="margin-bottom:28px;">
    <h3 style="margin:0 0 10px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:${color};">${title}</h3>
    <table style="width:100%;border-collapse:collapse;border-radius:12px;overflow:hidden;background:#f8fafc;font-size:14px;font-family:Arial,sans-serif;">
      ${rows}
    </table>
  </div>`;

const wrapper = (badgeColor, badge, headline, subline, body) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f0f9ff;font-family:Arial,sans-serif;">
  <div style="max-width:640px;margin:32px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(14,165,233,.12);">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#38bdf8,#0ea5e9);padding:32px 36px;">
      <div style="display:inline-block;background:rgba(255,255,255,.2);border-radius:999px;padding:4px 14px;font-size:12px;font-weight:700;color:#fff;letter-spacing:.06em;margin-bottom:12px;">${badge}</div>
      <h1 style="margin:0;font-size:24px;font-weight:800;color:#fff;">${headline}</h1>
      <p style="margin:8px 0 0;font-size:14px;color:rgba(255,255,255,.85);">${subline}</p>
    </div>
    <!-- Body -->
    <div style="padding:32px 36px;">
      ${body}
    </div>
    <!-- Footer -->
    <div style="background:#f8fafc;padding:18px 36px;text-align:center;font-size:12px;color:#94a3b8;">
      App Marketing Platform &nbsp;·&nbsp; This is an automated notification
    </div>
  </div>
</body>
</html>`;

/* ─────────────────────────────────────────
   FREE AUDIT email template
───────────────────────────────────────── */
const buildAuditHtml = (doc) => {
  const { appDetails: a, marketing: m, contact: c, createdAt } = doc;

  const appRows =
    row("App Name", a.appName) +
    row("Platform", a.platform) +
    row("Category", a.category) +
    row("App Store Link", a.appLink) +
    row("Current Downloads", a.downloads);

  const mktRows =
    row("Primary Goal", m.primaryGoal) +
    row("Monthly Budget", m.budget) +
    row("Current Channels", m.channels) +
    row("Target Countries", m.targetGeo) +
    row("Timeline", m.startDate);

  const ctcRows =
    row("Full Name", c.fullName) +
    row("Email", c.email) +
    row("Phone", c.phone) +
    row("Company", c.company);

  const body =
    section("📱 App Details", "#0ea5e9", appRows) +
    section("🎯 Goals & Budget", "#06b6d4", mktRows) +
    section("👤 Contact Details", "#0284c7", ctcRows) +
    `<p style="font-size:12px;color:#94a3b8;margin-top:24px;">Submitted: ${new Date(createdAt).toLocaleString()}</p>`;

  return wrapper(
    "#0ea5e9",
    "FREE AUDIT REQUEST",
    "New Growth Audit Submission",
    `From ${val(c.fullName)} — ${val(c.company || c.email)}`,
    body
  );
};

/* ─────────────────────────────────────────
   CUSTOM PLAN email template
───────────────────────────────────────── */
const buildCustomPlanHtml = (doc) => {
  const { appDetails: a, marketing: m, contact: c, createdAt } = doc;

  const appRows =
    row("App Name", a.appName) +
    row("Platform", a.platform) +
    row("Category", a.category) +
    row("App Store Link", a.appLink) +
    row("Total Downloads", a.downloads) +
    row("Monthly Active Users", a.mau) +
    row("App Store Rating", a.rating);

  const mktRows =
    row("Primary Goal", m.primaryGoal) +
    row("Monthly Budget", m.budget) +
    row("Current Channels", m.channels) +
    row("Target Countries", m.targetGeo) +
    row("Services Interested In", m.services) +
    row("Desired Start Date", m.startDate);

  const ctcRows =
    row("Full Name", c.fullName) +
    row("Email", c.email) +
    row("Phone", c.phone) +
    row("Company", c.company);

  const body =
    section("📱 App Details", "#0ea5e9", appRows) +
    section("🎯 Marketing Goals", "#06b6d4", mktRows) +
    section("👤 Contact Details", "#0284c7", ctcRows) +
    `<p style="font-size:12px;color:#94a3b8;margin-top:24px;">Submitted: ${new Date(createdAt).toLocaleString()}</p>`;

  return wrapper(
    "#0ea5e9",
    "CUSTOM PLAN REQUEST",
    "New Custom Plan Submission",
    `From ${val(c.fullName)} — ${val(c.company || c.email)}`,
    body
  );
};

/* ─────────────────────────────────────────
   Send notification email
───────────────────────────────────────── */
const sendSubmissionEmail = async (doc) => {
  const isAudit = doc.formType === "FREE_AUDIT";

  const subject = isAudit
    ? `🔍 New Free Audit Request — ${doc.appDetails.appName}`
    : `📋 New Custom Plan Request — ${doc.appDetails.appName}`;

  const html = isAudit ? buildAuditHtml(doc) : buildCustomPlanHtml(doc);

  const mailOptions = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    replyTo: doc.contact.email,
    subject,
    html,
  };

  const info = await transporter.sendMail(mailOptions);
  return info;
};

module.exports = { sendSubmissionEmail };
