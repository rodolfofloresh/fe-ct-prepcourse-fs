function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  return (valor === null || typeof valor === "undefined");
  
  

  

}


console.log("1. este es mi consolelog", esNuloOIndefinido(null));
console.log("2. este es mi consolelog", esNuloOIndefinido("null"));

module.exports = esNuloOIndefinido;