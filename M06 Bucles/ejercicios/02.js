function esVerdaderoYFalso(booleano1, booleano2) {
  // La función recibe dos argumentos "booleano1" y "booleano2".
  // Retorna true si ambos son verdaderos, caso contrario, retorna false.
  // Tu código:
  if (booleano1 === true && booleano2 === true) {
    return true;
  }

  else {
    return false;
  }

}

console.log("(1. Es mi consolelog)", esVerdaderoYFalso(true, true));
console.log("(2. Es mi consolelog)", esVerdaderoYFalso(false, false));

module.exports = esVerdaderoYFalso;
