const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === "true", // true → port 465, false → 587
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify connection on startup (non-blocking)
transporter.verify((error) => {
  if (error) {
    console.warn("⚠️  Mail transporter not ready:", error.message);
  } else {
    console.log("✅  Mail transporter ready");
  }
});

module.exports = transporter;
