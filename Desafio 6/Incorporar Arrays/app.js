class Producto {
    constructor(id, nombre, descripcion, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    // Metodos
    sumarIva(){
        this.precio = (this.precio * 0.21) + this.precio;
    }

    restarStock(cantidad){
        this.stock -= cantidad;
    }

    actualziarStock(cantidad){
        this.stock += cantidad;
    }
}

const producto = [];
producto.push( new Producto(10, "Resistencia", "Descripcion del producto", 120, 1000));
producto.push( new Producto(11, "Componentes SMD", "Descripcion del producto", 150, 500));

console.log(producto);

// Array de productos
const productos = [
    {
        id: 1, 
        nombre: "Led", 
        descripcion: "Descripcion del producto", 
        precio: 100, 
        stock: 25
    },
    {
        id: 2, 
        nombre: "Transistores", 
        descripcion: "Descripcion del producto", 
        precio: 200, 
        stock: 50
    },
    {
        id: 3, 
        nombre: "Diodos", 
        descripcion: "Descripcion del producto", 
        precio: 300, 
        stock: 100
    },
    {
        id: 4, 
        nombre: "Herramientas", 
        descripcion: "Descripcion del producto", 
        precio: 400, 
        stock: 200
    }
]

// Recorrer el array
for (let prod of productos) {
    console.log(prod)
}   

// Agregar productos al final del carrito
const carrito = [];
carrito.push(productos[1]);
carrito.push(productos[3]);
console.log(carrito);

// Agregar productos al inicio del carrito
carrito.unshift({id: 0, nombre: 'Pinzas', descripcion: 'Descripcion del producto', precio: 200, stock: 50});
console.log("Agregar",carrito);

//Borra el primer elemento
carrito.shift();
console.log("Eliminar",carrito);

// Borra el ultimo elemento de un array
carrito.pop();
console.log("Eliminar",carrito);

// Buscar productos
const buscar = (query) => {
    return productos.filter((producto) => producto.nombre === query)
}
const filtrado = buscar("Led");
console.log(filtrado);

// Suma dos array y los guarda en otro array
const nuevosProductos = [
    {
        id: 5, 
        nombre: "Pilas", 
        descripcion: "Descripcion del producto", 
        precio: 500, 
        stock: 250
    }
]
let nuevoArray = productos.concat(nuevosProductos);
console.log(nuevoArray);

//  Fine
const resultado = productos.find((car) => {
    return car.nombre === "Diodos";
})
console.log(resultado);
