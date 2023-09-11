const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const hpp = require("hpp");

dotenv.config({ path: "./config.env" });

const app = express();

app.use(helmet());
app.use(hpp());

app.use("/api", require("./src/Routes/api"));

app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found!",
  });
});

module.exports = app;
