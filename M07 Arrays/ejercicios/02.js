function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  var ordenar = array.sort();
  return ordenar;

}

var miorden = [4, 2, 3, 1];
console.log("Es mi consolelog:", ordenarArray(miorden));
module.exports = ordenarArray;
