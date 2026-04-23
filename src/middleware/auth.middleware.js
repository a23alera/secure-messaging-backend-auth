// Importerar jsonwebtoken för att kunna verifiera tokens
const jwt = require("jsonwebtoken");

// Middleware-funktion som ska köras innan skyddade routes
const authMiddleware = (req, res, next) => {

  // Hämtar Authorization-headern från requesten
  const authHeader = req.headers.authorization;

  // Om ingen header finns → användaren är inte inloggad
  if (!authHeader) {
    return res.status(401).json({
      message: "Ingen token skickades med",
    });
  }

  // Delar upp headern "Bearer TOKEN"
  const token = authHeader.split(" ")[1];

  // Om token saknas efter split → fel format
  if (!token) {
    return res.status(401).json({
      message: "Ogiltigt token-format",
    });
  }

  try {

    // Verifierar token med samma secret som användes vid login
    // Om token är giltig, får vi tillbaka payload (t.ex. username)
    const decoded = jwt.verify(token, "secretkey");

    // Sparar användarinfo i requesten så vi kan använda den senare
    req.user = decoded;

    // Går vidare till nästa steg (själva route-logiken)
    next();

  } catch (error) {

    // Om token är ogiltig eller har gått ut → stoppa requesten
    return res.status(401).json({
      message: "Ogiltig eller utgången token",
    });
  }
};

// Exporterar middleware så den kan användas i routes
module.exports = authMiddleware;