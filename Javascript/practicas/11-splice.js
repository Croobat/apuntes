var articulos = ['carro', 'celular', 'moto', 'tv', 'libro']; //eliminar moto

articulos.splice(2, 1); //el primer parámetro especifica el índice del elemento que quiero eliminar, en este caso es moto
//y el segundo parámetro especifica cuantos elementos del arreglo quiero eliminar, en este caso solo uno que es moto
//['carro', 'celular', 'tv', 'libro']
//
//splice corta un arreglo, el primer elemento indica posición inicial y el segundo cuántos elementos cortar hacia adelante.
