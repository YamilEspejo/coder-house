let nombre_usuario = prompt("Ingrese su nombre: ");
alert("¡¡Hola, "+nombre_usuario+"!!")

let numeroUno = parseInt(prompt("Ingrese el primer numero"));
let numeroDos = parseInt(prompt("Ingrese el segundo numero"));

let suma = numeroUno + numeroDos;
let resta = numeroUno - numeroDos;
let multiplicacion = numeroUno * numeroDos;
let division = numeroUno / numeroDos;
let cadena = "La suma es: "+suma+", la resta es: "+resta+", la multiplicacion es: "+multiplicacion+", la division es: "+division;

console.log("La suma es: ",suma);
console.log("La resta es: " ,resta);
console.log("La multiplicacion es: ",multiplicacion);
console.log("La division es: ",division);
console.log(cadena);

alert("La suma es: "+suma);
alert("La resta es: "+resta);
alert("La multiplicacion es: "+multiplicacion);
alert("La division es: "+division);
alert(cadena);