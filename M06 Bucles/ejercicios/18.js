function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var num = 1;
  if(a<0){
    return 0;
    
  }
  for(var i = a ; i <= b ; i++) {
    num *= i;
  }

  return num;
 
  

}

console.log(productoEntreNúmeros(2, 5));

module.exports = productoEntreNúmeros;