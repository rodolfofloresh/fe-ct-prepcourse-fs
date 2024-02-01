function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = 0;
  
  for (let i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];

  }

  var promedio = suma / resultadosTest.length;
  return promedio;
    
}

var miarray = [10, 20, 30];
var mipromedio = promedioResultadosTest(miarray);

console.log(mipromedio);




module.exports = promedioResultadosTest;
