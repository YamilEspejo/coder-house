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

    actualizarStock(cantidad){
        this.stock += cantidad;
    }
}

// Agregar elementos al array
const productos = [];
productos.push(new Producto(10, "Resistencia", "Descripcion del producto", 120, 1000));
productos.push(new Producto(11, "Componentes SMD", "Descripcion del producto", 150, 500));
productos.push(new Producto(5, "Componentes", "Descripcion del producto", 150, 500));
productos.push(new Producto(1, "Led", "Descripcion del producto", 150, 500));

console.log("Devuelve el array de productos: ",productos);

const producto2 = new Producto(2, "Transistores", "Descripcion del producto", 200, 50);

// Aplicar los metodos agregados en la funcion
producto2.sumarIva();
console.log("El precio es: ",producto2.precio);

producto2.restarStock(parseInt(prompt("Ingrese el numero de stock a restar")));
console.log("El stock actual es:",producto2.stock," contemplando el stock vendido");

producto2.actualizarStock(parseInt(prompt("Ingrese el numero de stock a sumar")));
console.log("El stock actual es:",producto2.stock,"sumando los nuevos stock");

// Agregar productos a mano
let cantidadProductosAgregar = parseInt(prompt("Ingrese la cantidad de productos a ingresar"));
let producto = [];

for(let i = 0; i < cantidadProductosAgregar; i++){
    const productos = new Producto(parseInt(prompt("ID")),
    prompt("Nombre"),
    prompt("Descripcion"),
    parseFloat(prompt("Precio")),
    parseInt(prompt("Stock")));
    console.log("Productos agregados por el usuario: ",productos);

    producto += "ID: "+productos.id+"\n"+
    "Nombre: "+productos.nombre+"\n"+
    "Descripcion: "+productos.descripcion+"\n"+
    "Precio: "+productos.precio+"\n"+
    "Stock: "+productos.stock+"\n"+"\n";
}
alert(producto);


// Array de productos
const arrayProductos = [
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
];

console.log("Productos agregados en un array: ",arrayProductos);

// Agregar productos al array de productos
const agregarProductos = (array) => {    
    return productos.push(array);
}
agregarProductos(arrayProductos);
console.log("El array actualizado es el siguiente",productos)

// Recorrer el array
for (let prod of arrayProductos) {
    console.log("Recorriendo el array: ",prod)
}  

// Agregar productos al carrito
const carrito = [];
carrito.push(arrayProductos[1]);
carrito.push(arrayProductos[3]);
console.log("Carrito: ",carrito);

// Vaciar carrito
var elementosRemovidos = carrito.splice(0, carrito.length);
console.log(elementosRemovidos);
console.log("Se eliminaron los productos del carrito",carrito);


// Buscar productos
const buscar = (query) => {
    return productos.filter((producto) => producto.nombre === query)
}
const filtrado = buscar("Led");
console.log("Devuelve el elemento buscado",filtrado);

// Ordenar array por ID
const ordenado = (array) => {
    return array.slice().sort((a, b) => {
        if(a.id > b.id) {
            return 1
        }
        if(a.id < b.id) {
            return -1
        }
        if(a.id == b.id) {
            return 0
        }
    })
}

let ordenar = ordenado(productos);
console.log("Devuelve el array ordenado por id",ordenar);