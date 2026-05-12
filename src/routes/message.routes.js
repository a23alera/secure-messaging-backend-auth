// Importerar Express router
const express = require("express");

// Skapar router
const router = express.Router();

// Importerar auth middleware
const authMiddleware = require("../middleware/auth.middleware");

// Tillfällig array som sparar messages i minnet
// Senare kommer detta ersättas med databas
const messages = [];

/*
  GET /api/messages

  Hämtar alla messages för inloggad användare
*/
router.get("/", authMiddleware, (req, res) => {

  // Hämtar username från token
  const username = req.user.username;

  // Filtrerar fram användarens messages
  const userMessages = messages.filter(
    (message) => message.username === username
  );

  // Returnerar messages
  res.json({
    messages: userMessages
  });

});

/*
  POST /api/messages

  Skickar/sparar ett nytt message
*/
router.post("/", authMiddleware, (req, res) => {

  // Hämtar message från request body
  const { text } = req.body;

  // Enkel validering
  if (!text) {
    return res.status(400).json({
      message: "Message text saknas"
    });
  }

  // Skapar message objekt
  const newMessage = {

    // Vem som skickade meddelandet
    username: req.user.username,

    // Själva texten
    text,

    // Tidpunkt
    createdAt: new Date()

  };

  // Sparar i array
  messages.push(newMessage);

  // Returnerar skapad message
  res.status(201).json({
    message: "Message skickat",
    data: newMessage
  });

});

// Exporterar router
module.exports = router;