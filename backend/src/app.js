const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const { notFound, errorHandler } = require("./middleware/errorHandler");

const app = express();

// Core middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/health", healthRoutes);

app.get("/", (req, res) => {
  res.send("Online Code Collaboration and Execution Platform API is running.");
});

// Error handling (must stay last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
