// Importerar appen vi skapade i app.js
const app = require("./app");

// Importerar miljövariabler
const env = require("./config/env");

// Startar servern och lyssnar på vald port
app.listen(env.port, () => {
  console.log(`Server is running on http://localhost:${env.port}`);
});