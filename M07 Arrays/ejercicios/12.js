function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = 0;

for(let i = 0; i < arrayOfNums.length; i++) {
  suma = suma + arrayOfNums[i];

} 

return suma;
}

var miarray = [5, 2, 3];
var sumaslementos = agregarNumeros(miarray);

console.log(sumaslementos);




module.exports = agregarNumeros;
