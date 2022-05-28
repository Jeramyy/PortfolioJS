document.getElementById("boton").addEventListener("click",algoritmo);
function algoritmo(){

let numero1 = Number(document.getElementById('num1').value);
let numero2 = Number(document.getElementById('num2').value);

let cociente = (numero1/numero2);

let resto = numero1 % numero2;
if(numero1>0 && numero2>0){
    document.getElementById('resultado').innerHTML="El cociente es "+parseInt(cociente)+" y el resto es "+resto;

}else{
    document.getElementById('resultado').innerHTML="ERROR - Introduce valores válidos positivos";
}


}