
function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if(num > 0) {
    return("Es positivo");
  }
  else if(num < 0) {
    return("Es negativo");
  }
  else(num === 0) 
    return(false);
  
}

console.log("1. es mi consolelog", esPositivo(19));
console.log("2. es mi consolelog", esPositivo(-18));
console.log("3. es mi consolelog", esPositivo(0));


module.exports = esPositivo;