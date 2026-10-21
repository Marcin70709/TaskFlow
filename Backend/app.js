const express = require("express");
const cors = require("cors");
const path = require("path");

const taskRoutes = require("./routes/tasks.routes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// REST API dla zadań
app.use("/api/tasks", taskRoutes);

// Serwowanie plików frontendowych (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "../frontend")));

// Dla wszystkich innych ścieżek zwracamy index.html (dla routingu frontendowego)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

module.exports = app;