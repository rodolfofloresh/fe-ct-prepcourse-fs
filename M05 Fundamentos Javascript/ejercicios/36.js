// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  // Retorna el valor de "num" elevado al exponente "exponent".
  // Tu código:

  return (Math.pow(num, exponent));

}

console.log("(1. Es mi consolelog)", elevar(5, 2));
console.log("(1. Es mi consolelog)", elevar(2, 4));



module.exports = elevar;