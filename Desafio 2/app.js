let numero = parseInt(prompt("Ingrese un numero"));

if(numero > 1000){
    alert("El numero "+numero+" es mayor a 1000");
}else if(numero >= 10 && numero <= 50){
    alert("El numero "+numero+" esta en el rango de 10 a 50");
}else{
    alert("El numero no ingreso en ninguna opcion");
}

let saludo = prompt("Ingrese un hola").toLowerCase().trim();

if(saludo === "hola"){
    console.log("Se a introducido un "+saludo);
}else{
    console.log("No se a introducido un hola");
}