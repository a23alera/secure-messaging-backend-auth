const express = require("express");
const router = express.Router();

// Importera controller
const authController = require("../controllers/auth.controller");

// Routes
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;