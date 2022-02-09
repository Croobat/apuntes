var frutas = ["Manzana", "Pera", "Plátano", "Cereza", "Fresa"];

console.log(frutas);

console.log(frutas.lenght); // 4

console.log(frutas[0]); // "Manzana"

var masFrutas = frutas.push("Uvas"); // Agrega "Uvas" al final del arreglo
var ultimo = frutas.pop(); // Elimina el último elemento (y lo da como salida)
var masFrutas2 = frutas.unshift("Sandía"); // Agrega Sandía al inicio del arreglo
var borrarFruta = frutas.shift("Uvas"); // Elimina el primer element del arreglo
var posManzana = frutas.indexOf("Manzana") // 0
