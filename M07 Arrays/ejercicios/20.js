function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var par = numeros.filter(function(numeros) {
    return numeros % 2 === 0;
  })
  
  return par.length;
  

}

var miarreglo = [3, 4, 5, 6, 7, 8, 9];
var pares = contarParesConContinue(miarreglo);
console.log(pares);

module.exports = contarParesConContinue;
