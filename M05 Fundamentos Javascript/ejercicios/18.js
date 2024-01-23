function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  return(num % 2 === 1);
}

console.log("1. es mi consolelog", esImpar(11));
console.log("2. es mi consolelog", esImpar(18));

module.exports = esImpar;