function multiplicarArgumentos(arguments) {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  var multiplicacion = 1;
  if ( arguments.length === 0){
    return 0;
  }
  else if(arguments.length === 1) {
    return arguments;
  }
  for (let i = 0; i < arguments.length; i++) {
    multiplicacion = multiplicacion * arguments[i];
  }

  return multiplicacion;

}

var miarray = [2,2,2];
var resultado = multiplicarArgumentos(miarray);
console.log(resultado);


module.exports = multiplicarArgumentos;
