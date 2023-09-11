// App.js
const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const hpp = require("hpp");

// Loading environment variables
dotenv.config({ path: "./config.env" });

const app = express();

// Middlewares for security and data processing
app.use(helmet());
app.use(hpp());
// Add other security middlewares as required

// Routes
app.use("/api", require("./src/Routes/api"));

// Undefined routes
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found!",
  });
});

module.exports = app;
