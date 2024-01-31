function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
  var indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

var miArray = [1, 2, 3, 4, 5];
var elementoAleatorio = obtenerElementoAleatorio(miArray);

console.log('Array:', miArray);
console.log('Elemento aleatorio:', elementoAleatorio);
 




module.exports = obtenerElementoAleatorio;
