// Calculo de IVA
const solicitarPrecio = () => {
    let costo = parseInt(prompt("Ingrese el precio del costo"));
    return costo;
}

const sumarIva = (costo) => {
    let iva = costo * 0.21;
    let total = iva + costo;
    return total;
}

const mostrarPrecio = () => {
    let precio_total = sumarIva(solicitarPrecio());
    alert("El precio total es: "+precio_total);
}

mostrarPrecio();