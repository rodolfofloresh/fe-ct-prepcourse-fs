function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var espar = array.filter(function(elemento) {
    return elemento % 2 ===0;
  
  })
 
  return espar;

}

var numeros = [4, 5, 6, 7, 8, 9];
var numpar = filtrarNumerosPares(numeros);
console.log(numpar);


module.exports = filtrarNumerosPares;
