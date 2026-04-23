// Importerar crypto för att kunna hasha lösenord
const crypto = require("crypto");

// Importerar jsonwebtoken för att kunna skapa tokens
const jwt = require("jsonwebtoken");

// Fake databas i minnet
const users = [];

// Registrerar en ny användare
exports.register = (req, res) => {

  // Hämtar username och password från requestens body
  const { username, password } = req.body;

  // Kontrollerar att båda värdena finns
  if (!username || !password) {
    return res.status(400).json({
      message: "Username och password krävs",
    });
  }

  // Hashar lösenordet innan det sparas
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  // Sparar användaren i vår array i minnet
  users.push({
    username,
    password: hashedPassword,
  });

  // Skickar tillbaka svar att användaren skapades
  res.status(201).json({
    message: "User skapad!",
  });
};

// Loggar in en användare
exports.login = (req, res) => {

  // Hämtar username och password från requestens body
  const { username, password } = req.body;

  // Hashar lösenordet från login-försöket
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  // Letar efter en användare med rätt username och rätt hashat lösenord
  const user = users.find(
    (u) => u.username === username && u.password === hashedPassword
  );

  // Om ingen användare matchar → neka login
  if (!user) {
    return res.status(401).json({
      message: "Fel login",
    });
  }

  // Skapar en JWT-token med användarens username som payload
  const token = jwt.sign(
    { username: user.username },
    "secretkey",
    { expiresIn: "1h" }
  );

  // Skickar tillbaka både lyckat login och token
  res.status(200).json({
    message: "Login lyckades!",
    token,
  });
};