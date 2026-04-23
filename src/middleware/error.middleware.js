// Global middleware för att hantera fel
const errorMiddleware = (err, req, res, next) => {
    // Loggar felet i konsolen (viktigt för debugging)
    console.error(err);
  
    // Skickar tillbaka ett fel-svar
    res.status(err.status || 500).json({
      error: err.message || "Internal Server Error",
    });
  };
  
  // Exporterar middleware
  module.exports = errorMiddleware;