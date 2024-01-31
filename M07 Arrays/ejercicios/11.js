function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var multiplicacion = array.map(function(elemento, indice){
    return elemento * indice;
  })

  return multiplicacion

}

var miarray = [2, 5, 3, 1];
var multiplicardatos = multiplicarElementosPorIndice(miarray);


console.log(miarray);
console.log(multiplicardatos);



module.exports = multiplicarElementosPorIndice;
