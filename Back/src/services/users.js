const fs = require("fs");
const path = require("path");


function readDB(){
  try{
    const filePath = path.join(__dirname, "..", '..', "db/usersDB.json"); // Obtengo la ruta completa
    const data = fs.readFileSync(filePath, "utf8");
    const dataParseada = JSON.parse(data, null, 2);
    return dataParseada
  } catch (error) {
    console.error(error)
    return false 
  }
  
}

function createUsers(user) {
  try {
    const filePath = path.join(__dirname, "..", '..',"db/usersDB.json"); // Obtengo la ruta completa
    // const data = getAllProducts();
    const data = []
    data.push(user);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

function findUserByUsername(email) {
    dataParseada = readDB()
    if (dataParseada.length) {
      const savedUser = dataParseada.filter((user) => user.email === email)

      return savedUser.length ? savedUser[0] : false
    }
    return false
}

function findIdDisponible(){
  dataParseada = readDB()
  for(let i = 0; i < dataParseada.lenght; i++){
    if (dataParseada[i].id == NaN){
      return i
    }
  }
  return(dataParseada.length + 1)
}

module.exports = { createUsers, findUserByUsername, findIdDisponible }