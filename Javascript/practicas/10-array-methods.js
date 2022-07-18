var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Audifonos", costo: 1700}
    ];

var filtrados = articulos.filter(function(articulo){
    return articulo.costo <= 2000
    })  // Nuevo array "filtrados" con audifonos

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
    });  // Nuevo array nombreArticulos con solo los nombres de articulos

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Bici"
}); // Como filter pero solo regresa el PRIMER elemento que cumpla con la condición.
    
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
}); // Ejecuta la funcion para cada articulo en el arreglo

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <= 700;
}); // Devuelve booleano según la condición aplicada al arreglo.