function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:

  return (Number.isInteger(numero));

}

console.log("1. es mi consolelog", esNumeroEntero(9));
console.log("2. segundo consolelog", esNumeroEntero(3.3))



module.exports = esNumeroEntero;  