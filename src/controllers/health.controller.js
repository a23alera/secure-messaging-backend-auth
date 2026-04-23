// Funktion som hanterar health-check request
const getHealth = (req, res) => {
    res.status(200).json({
      // Status för API
      status: "ok",
  
      // Kort meddelande
      message: "API is healthy",
  
      // Tidpunkt för request (bra för debugging)
      timestamp: new Date().toISOString(),
    });
  };
  
  // Exporterar funktionen
  module.exports = {
    getHealth,
  };