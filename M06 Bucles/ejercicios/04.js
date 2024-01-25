function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  if (edad >= 18) {
    return "Allowed";
  }
  else {
    return "Not allowed";
  }

}
console.log("(1. Es mi consolelog)", mayoriaDeEdad(17));
console.log("(2. Es mi consolelog)", mayoriaDeEdad(19));


module.exports = mayoriaDeEdad;
