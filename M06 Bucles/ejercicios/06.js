function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return (num / 100 >=1 && num / 100 <=9.99);
  
}
console.log("(1. es mi consolelog)", tieneTresDigitos(999));
console.log("(2. es mi consolelog)", tieneTresDigitos(120));
console.log("(3. es mi consolelog)", tieneTresDigitos(99));


module.exports = tieneTresDigitos;
