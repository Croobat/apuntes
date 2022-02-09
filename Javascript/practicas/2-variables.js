// Comentarios

// Declarar variable
var edad;

// Inicializar variable
edad = 30;

// Declarar e inicializar variable
var tony = "Tony";

var elementos = ["computadora", "celular"];

var persona = {
    nombre: "Tony",
    edad: 30
};

persona;


// Función constructora
//Paso 1: Creamos una lista vacía de autos
var listaAutos = [];

//Paso 2: Creamos la función constructora
function auto(marca, modelo, anio){
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
};

//Paso 3: Creamos una función que agregue un auto nuevo a la lista
function agregarAuto(marca, modelo, anio){
    var nuevoAuto = new auto(marca, modelo, anio);
    listaAutos.push(nuevoAuto);
};

//Paso 4: Creamos una función para que el usuario agregue un nuevo carro con sus parámetros
function registrarAutoNuevo(){
    var marca = prompt("Ingresa la marca: ");
    var modelo = prompt("Ingresa el modelo: ");
    var anio = prompt("Ingresa el año: ");
    agregarAuto(marca, modelo, anio);
    console.log("¡Agregaste tu nuevo carro con éxito!");
};

//Paso 5: Mostramos el arreglo actualizado
listaAutos;