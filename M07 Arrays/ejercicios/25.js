function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
 
  

} 
var miarray = [1, 2, 3];
var elementoagregado = 4;
var resultado = agregarItemAlFinalDelArray(miarray, elementoagregado);
console.log(resultado);


module.exports = agregarItemAlFinalDelArray;
