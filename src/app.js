const userRoutes = require("./routes/user.routes");

// Importerar Express (ramverk för backend API)
const express = require("express");

// Importerar routes för health endpoint
const healthRoutes = require("./routes/health.routes");

// Importerar global felhantering
const errorMiddleware = require("./middleware/error.middleware");

// Skapar en Express-app
const app = express();

const authRoutes = require("./routes/auth.routes");

// Middleware som gör att vi kan läsa JSON från requests
app.use(express.json());

// Använd routes
app.use("/api/auth", authRoutes);

// Kopplar health routes till /api/health
app.use("/api/health", healthRoutes);

app.use("/api/user", userRoutes);

// Test-route för att se att servern kör
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Secure Messaging Backend API is running",
  });
});

// Global error handler (måste ligga sist)
app.use(errorMiddleware);

// Exporterar appen så server.js kan använda den
module.exports = app;