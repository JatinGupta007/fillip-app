require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
// Initialise mailer (runs verify on import)
require("./config/mailer");

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀  Server running on http://localhost:${PORT}`);
    console.log(`📄  Environment: ${process.env.NODE_ENV}`);
  });
};

start();
