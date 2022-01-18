// Determinar si un numero es multiplo
const solicitarNumeros = () => {
    let numero = parseInt(prompt("Ingrese el primer numero"));
    let numero_dos = parseInt(prompt("Ingrese el segundo numero"));

    return [numero, numero_dos];
}

const esMultiplo = () => {
    const [num1, num2] = solicitarNumeros();

    if((num1 % num2) == 0){
        return true;
    }else{
        return false;
    }
}

const mostrarResultado = () => {
    if(esMultiplo(true)){
        alert("Son multiplo entre si");
    }else{
        alert("No son multiplos");
    }
}

mostrarResultado();