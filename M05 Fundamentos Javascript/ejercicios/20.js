function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:

  if(typeof letra === "string" && letra.length === 1) {
    if(letra === "a" || letra === "e" || letra == "i" || letra === "o" || letra == "u") {
      return("Es vocal");
    }
    else {
      return("Dato incorrecto");
    }
  }

  else {
    return("Dato incorrecto");
  }
  

  


}
console.log("(1. es mi consolelog)", esVocal("e"));
console.log("(2. es mi consolelog)", esVocal("arbol"));
console.log("(3. es mi consolelog)", esVocal("4"));

module.exports = esVocal;
