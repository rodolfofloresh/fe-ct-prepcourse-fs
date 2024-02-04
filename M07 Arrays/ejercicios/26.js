function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

var miarray = [4, 77, 30];
var elementoagregado = 18;
var resultado = agregarItemAlComienzoDelArray(miarray, elementoagregado);
console.log(resultado);

module.exports = agregarItemAlComienzoDelArray;
