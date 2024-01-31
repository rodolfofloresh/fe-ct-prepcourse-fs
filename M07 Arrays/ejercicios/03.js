function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] === elemento) {
      return i;
    }
  }

  return -1;
}


const miArray = [1, 2, 3, 4, 5];
const elementoBuscado = 3;
const indiceEncontrado = encontrarElemento(elementoBuscado, miArray);

console.log('Array:', miArray);
console.log('Elemento buscado:', elementoBuscado);
console.log('Índice encontrado:', indiceEncontrado);
  




module.exports = encontrarElemento;
