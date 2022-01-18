// Array de productos
const productos = [
    {
        id: 1, 
        nombre: "Led", 
        descripcion: "Descripcion del producto", 
        precio: 300, 
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
        precio: 150, 
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

const ordenado = (array) => {
    return array.slice().sort((a, b) => {
        if(a.precio > b.precio) {
            return 1
        }
        if(a.precio < b.precio) {
            return -1
        }
        if(a.precio == b.precio) {
            return 0
        }
    })
}

let ordenar = ordenado(productos);
console.log(ordenar);
console.log(productos);