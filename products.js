productos = ["microndas", "horno electrico", "television smart", "equipo de musica", "heladera"]
// Acceder de manera arbitraria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
// console.log("El primer producto es " + productos[0]);
const indiceAleatorio = Math.floor(Math.random() * productos.length);
const productoAleatorio = productos[indiceAleatorio];
console.log(productoAleatorio);
// Extraer el primer elemento del array y agregarlo al final del mismo.
primerElemento = productos.shift();
productos.push(primerElemento);
console.log(productos);
// Agregar al final del array dos (2) nuevos productos.
productos.push("ventilador", "aire acondicionado");
console.log(productos);
// "Mostrar por la consola la cantidad de elementos que contiene el array."
cantidadDeElementos = productos.unshift();
console.log(cantidadDeElementos);
// Buscar un elemento del array y crear una condición responsable de establecer si existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje: “Producto encontrado”. En el caso contrario mostrar elmensaje “El producto buscado no existe”.
const buscarProducto = productos.includes("estufa");
if (buscarProducto) {
    console.log("Producto encontrado");

} else {
    console.log("el producto buscado no existe");
}
// Unificar todos los elementos del array en una cadena de texto (string),separando los elementos por espacios en blanco.
separadosPorEspacios = productos.join(", ")
console.log(separadosPorEspacios);
// Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log(separadosPorEspacios.length);
// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
separadosPorEspacios = separadosPorEspacios.replace("television smart", "heladera")
console.log(separadosPorEspacios);
// Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.
console.log(separadosPorEspacios.split(", "));







