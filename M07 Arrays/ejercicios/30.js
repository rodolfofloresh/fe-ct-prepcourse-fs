function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (var i = 0; i < numeros.length; i++) {
    for(let j = i + 1; j < numeros.length; j++) {
      if(numeros[i] === numeros[j]) {
        return numeros[i];
      }
    }
  }
}

var prueba = encontrarElementoRepetido([1, 2, 3, 3, 4, 5]);
console.log(prueba);
module.exports = encontrarElementoRepetido;