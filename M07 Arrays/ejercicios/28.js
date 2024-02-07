function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return Array.isArray(arr) && arr.length > 0;

}

var miarray = [1, 2, 3];
var resultado = esArrayNoVacio(miarray);
console.log(resultado);


module.exports = esArrayNoVacio;