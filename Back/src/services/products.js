const fs = require("fs");
const path = require("path");

function readDB() {
  try {
    const filePath = path.join(__dirname, "..", "..", "db/productsDB.json"); // Obtengo la ruta completa
    const data = fs.readFileSync(filePath, "utf8");
    const dataParseada = JSON.parse(data, null, 2);
    return dataParseada;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function getAllProducts() {
  dataParseada = readDB();
  return dataParseada;
}

module.exports = { getAllProducts };
