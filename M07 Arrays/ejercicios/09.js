function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var mayor = array.filter(function(elemento) {
    return elemento > 10;
  })
  return mayor.length;
  
  


}

var numeros = [2, 31, 18, 6];
var numermayores = contarElementosMayoresA10(numeros);

console.log(numermayores);


module.exports = contarElementosMayoresA10;
