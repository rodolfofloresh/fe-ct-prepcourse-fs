function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var num = 0;
  for(var i = 1 ; i <= n ; i++){
    num +=i;
  } 
  
  return num;
  
}
console.log(sumarHastaN(4));

module.exports = sumarHastaN;
