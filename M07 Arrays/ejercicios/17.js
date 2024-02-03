function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var tabla = [];

  for(let i = 0; i <=10; i++) {
    tabla.push(i * 6);
  }

  return tabla;

}

var tabla6 = tablaDelSeis();
console.log(tabla6);

module.exports = tablaDelSeis;
