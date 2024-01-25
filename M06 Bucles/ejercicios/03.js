function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x < y ) {
    return y;
  }
  else if( x > y) {
    return x;
  }
  else (x === y) 
    return x || y;

}

console.log("(1. Es mi consolelog)", obtenerMayor(2, 2));
console.log("(2. Es mi consolelog)", obtenerMayor(3, -5));

module.exports = obtenerMayor;
