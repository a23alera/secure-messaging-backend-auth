// Importerar Express router
const express = require("express");

// Skapar en router
const router = express.Router();

// Importerar controller för health
const healthController = require("../controllers/health.controller");

// Definierar GET endpoint på /api/health
router.get("/", healthController.getHealth);

// Exporterar router så den kan användas i app.js
module.exports = router;