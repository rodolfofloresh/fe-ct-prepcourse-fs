function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  return(num % 2 === 0);
}

console.log("1. es mi consolelog", esPar(10));
console.log("2. es mi consolelog", esPar(11));

module.exports = esPar;
