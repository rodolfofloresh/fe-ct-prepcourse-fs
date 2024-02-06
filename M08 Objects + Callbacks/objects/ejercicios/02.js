function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:

  objeto[propiedad] = valor;
  return objeto;

}

var miObjeto = {
  animal: "Perro",
  raza: "Bulldog",
  edad: 3,
}

console.log("Objeto original:", miObjeto);
miObjeto = actualizarValorPropiedad(miObjeto, "edad", 7);
console.log("Objeto actualizado", miObjeto);


module.exports = actualizarValorPropiedad;
