function deEuroAdolar(euro) {
  // Debes calcular el valor recibido como argumento pasándolo a dólares.
  // Supongamos que 1 euro equivale a 1.20 dólares.
  // Tu código:
  return(euro * 1.20);
}

console.log("(1. Es mi consolelog)", deEuroAdolar(10));
console.log("(2. Es mi consolelog)", deEuroAdolar(20));

module.exports = deEuroAdolar;
