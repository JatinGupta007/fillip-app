const express = require("express");
const cors = require("cors");

const submissionRoutes = require("./routes/submissionRoutes");

const app = express();

/* ── Middleware ── */
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || "*", // restrict in production
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ── Health check ── */
app.get("/health", (_req, res) =>
  res.json({ status: "ok", timestamp: new Date().toISOString() })
);

/* ── API routes ── */
app.use("/api/submissions", submissionRoutes);

/* ── 404 handler ── */
app.use((_req, res) =>
  res.status(404).json({ success: false, message: "Route not found" })
);

/* ── Global error handler ── */
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

module.exports = app;
