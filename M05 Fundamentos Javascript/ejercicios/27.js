function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:

  return ( nombre + " " + apellido);
  
}

console.log("(1. Es mi consolelog)", combinarNombres("gool", "perro"));
console.log("(2. Es mi consolelog)", combinarNombres("boom", "muere"));

module.exports = combinarNombres;
