function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var indicemayor = 0;

  for (let i = 0; i < array.length; i++) {
    if(array[i] > array[indicemayor]) {
      indicemayor = i;
    }
  }

  return indicemayor;
}

var valores = [2, 6, 3, 9];
var numeromaximo = encontrarIndiceMayor(valores);

console.log(numeromaximo);

module.exports = encontrarIndiceMayor;
