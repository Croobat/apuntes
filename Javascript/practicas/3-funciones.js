// Funciones declarativas
// Devuelven un valor o dato
function miFuncion() {
    return 3;
}
miFuncion();

//Funciones de expresión
// Funciones guardadas dentro de esta variable
// También conocidas como funciones anónimas (pues no tienen nombre
// en si, sino la variable donde se guardan
var sumar = function(a, b) {
    return a + b;
}
sumar(a, b);



function saludarEstudiantes(estudiante) {
    console.log('Hola ${estudiante}');
}

function suma(a,b) {
    var resultado = a + b;
    return resultado;
}