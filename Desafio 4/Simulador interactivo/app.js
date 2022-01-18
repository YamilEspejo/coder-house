// Descuentos en los productos ingresados
const seleccionarProductos = () => {
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos a comprar"));

    if(cantidadProducto >= 4){
        return calcularDescuento(solicitarPrecio());
    }else{
        return solicitarPrecio();
    }
}

const solicitarPrecio = () => {
    let costo = parseInt(prompt("Ingrese el precio total del/los producto seleccionados"));
    return costo;
}

const calcularDescuento = (costo) => {
    let descuento = costo * 0.15;
    let total = costo - descuento;
    return total;
}

const mostrarPrecio = () => {
    let precio_total = seleccionarProductos();

    if(Number.isNaN(precio_total)){
        alert("Solo se puede ingresar numeros");
    }else{
        alert("El precio total es: "+precio_total);
    }
}

mostrarPrecio();