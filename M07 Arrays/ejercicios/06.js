function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
  var duplicar = array.map((array => {
    return array*2;
  }))
  return duplicar
}

var numero1 = [1, 2, 3];
var numeroduplicado = duplicarElementos(numero1);
console.log(numeroduplicado);

module.exports = duplicarElementos;
