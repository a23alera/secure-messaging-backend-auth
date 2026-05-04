// Importerar middleware
const authMiddleware = require("../middleware/authMiddleware");

// Skyddad route
router.get("/messages", authMiddleware, (req, res) => {

  res.json({
    message: "Du har access till messages",
    user: req.user
  });
});