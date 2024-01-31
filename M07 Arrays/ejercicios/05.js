function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (let i = 0; i < array.length; i++){
    if(array[i].length > 5 &&  typeof array[i] === "string") {

      return array[i];
    }

    }
    
    return undefined;
    
  }

var array1 = ["Juan", "Luis", "Rodolfo", "Pedro", "Sebastian"];
var stringlargo = obtenerPrimerStringLargo(array1);

console.log(array1);
console.log(stringlargo);

module.exports = obtenerPrimerStringLargo;
