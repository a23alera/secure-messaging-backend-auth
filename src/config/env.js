// Importerar dotenv för att kunna läsa variabler från .env-fil
const dotenv = require("dotenv");

// Laddar alla variabler från .env till process.env
dotenv.config();

// Skapar ett objekt som samlar alla miljövariabler vi använder
const env = {
  // Port som servern ska köra på (default 3000 om inget anges)
  port: process.env.PORT || 3000,

  // Miljö (development / production)
  nodeEnv: process.env.NODE_ENV || "development",

  // JWT secret för autentisering (viktig senare)
  jwtSecret: process.env.JWT_SECRET || "supersecretdevkey",
};

// Exporterar objektet så vi kan använda det i andra filer
module.exports = env;