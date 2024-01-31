function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var mayuscula = array.map(function(elemento) {
    if(typeof elemento === "string") {
      return elemento.toUpperCase();
    }
    return elemento;
  });
  return mayuscula;

  
}

 
var array1 = ["perro", "gato", "cocodrilo"];
var convertir = convertirStringAMayusculas(array1);


console.log(convertir);

module.exports = convertirStringAMayusculas;
