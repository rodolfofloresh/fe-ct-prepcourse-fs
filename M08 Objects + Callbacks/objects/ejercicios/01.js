const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
 
  return objeto[propiedad];
  

};

var miObjeto = {
  nombre: "Rodolfo",
  edad: 32,
  pais: "Peru",

};


console.log(obtenerValorPropiedad(miObjeto, "edad"));



module.exports = obtenerValorPropiedad;
