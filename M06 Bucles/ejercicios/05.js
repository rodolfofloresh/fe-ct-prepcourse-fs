function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  if (valor === true) {
    return "Soy verdadero";
  }
  else {
    return "Soy falso";
  }


}
console.log("(1. Es mi consolelog)", esVerdadero(false));
console.log("(2. Es mi consolelog)", esVerdadero(true));


module.exports = esVerdadero;
