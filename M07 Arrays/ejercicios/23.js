function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  return array[array.length - 1];
}


var miarray = [7, 2, 18];
var resultado = devolverUltimoElemento(miarray);
console.log(resultado);

module.exports = devolverUltimoElemento;
