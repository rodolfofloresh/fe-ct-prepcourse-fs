function obtenerSaludo(nombre) {
  // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Tu código:
  
  return("Hola" + " " + nombre + "!");
}

console.log("(1. Es mi consolelog)", obtenerSaludo("Rodolfo"));
console.log("(2. Es mi consolelog)", obtenerSaludo("Lucero"));
module.exports = obtenerSaludo;