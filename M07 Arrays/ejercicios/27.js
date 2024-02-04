function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var frase = palabras.join(" ");
  return frase;
}


var mispalabras = ["Hola", "amiguitos"];
var frasefinal = dePalabrasAFrase(mispalabras);
console.log(frasefinal);



module.exports = dePalabrasAFrase;
