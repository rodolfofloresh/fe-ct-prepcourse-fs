function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesespedidos = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      mesespedidos.push(array[i]);
    }
  }

  if(mesespedidos.length === 3) {
    return mesespedidos;
  }
  else {
    return "No se encontraron los meses pedidos";
  }
}

var mesesiniciales = ["Junio", "Marzo", "Mayo", "Enero", "Noviembre"];
var mesesfiltrados = mesesDelAño(mesesiniciales);

console.log(mesesfiltrados);

module.exports = mesesDelAño;
