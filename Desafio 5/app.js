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

const producto1 = new Producto(1, "Led", "Descripcion del producto", 100, 25);
console.log(producto1);

const producto2 = new Producto(2, "Transistores", "Descripcion del producto", 200, 50);
producto2.sumarIva();
console.log(producto2);

const producto3 = new Producto(3, "Diodos", "Descripcion del producto", 300, 100);
producto3.restarStock(25);
console.log(producto3);

const producto4 = new Producto(4, "Herramientas", "Descripcion del producto", 400, 200);
producto4.actualziarStock(100);
console.log(producto4);