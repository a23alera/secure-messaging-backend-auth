// Importera express för att kunna skapa routes
const express = require("express");

// Skapar en router
const router = express.Router();

// Importera auth middleware, för att kontrollera token) 
const authMiddleware = require("../middleware/auth.middleware");

// Skapar en GET route för profile
// är skyddad påground av att det skickas in i authmiddelware först
router.get("/profile", authMiddleware,(req, res) => {

    //Token är giltigt
    // req.user innehåller datan från token (ex username)

    res.status(200)-json( {
        message: "Skyddad route funkar",
        user: req.user,
    });
});

module.exports = router;