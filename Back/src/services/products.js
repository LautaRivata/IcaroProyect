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
  const dataParseada = readDB();
  return dataParseada;
}

function getProduct(id) {
  const dataParseada = readDB();
  for (let i = 0; i < dataParseada.length; i++) {
    if (dataParseada[i].id == id) {
      return dataParseada[i];
    }
  }
  return false;
}

module.exports = { getAllProducts, getProduct };
