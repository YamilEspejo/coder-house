// Ejercicio 1
let numero ='';
const NUMERO_ADICIONAL = 15;

do{
    numero = parseInt(prompt("Ingrese un numero"));
    if(Number.isNaN(numero)){
        alert("Saludos, vuelva mas tarde");
    }else{
        let suma = numero + NUMERO_ADICIONAL;
        alert("El numero sumado es: "+suma); 
    }
}while(numero);


// Ejercicio 2
let texto = '';
const VALOR_CONCATENADO = '19';
const SALIDA = 'ESC';

while(texto != SALIDA){
    texto = prompt("Ingrese un texto").toUpperCase().trim();
    if(texto == SALIDA){
        alert("Chau");
    }else{
        let resultado = texto +" "+ VALOR_CONCATENADO;
        alert(resultado);
    }
}


// Ejercicio 3
let cantidad_saludos = parseInt(prompt("Ingrese un numero")); 
const SALUDO = 'Hola';

for(let i = 1; i <= cantidad_saludos; i++){
    alert(i+"-"+SALUDO);
}