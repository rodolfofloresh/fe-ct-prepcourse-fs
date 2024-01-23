function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  return (x % y);

}

console.log("(1. Es mi consolelog)", obtenerResto(5, 5));
console.log("(2. Es mi consolelog)", obtenerResto(15, 4));
module.exports = obtenerResto;