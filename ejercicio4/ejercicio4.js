/*

*/
document.getElementById("boton").addEventListener("click",letraDni);

function letraDni(){

const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

let dni = Number(document.getElementById('dni').value);

let resto = dni % 23;

let letra = LETRAS.substring(resto,resto+1);
if(dni.length>7){
  document.getElementById('letras').innerHTML = "La letra es: "+letra;
}else{
  document.getElementById('letras').innerHTML = "ERROR - Se necesitan 8 números";

}
}
    let fondo = document.body;
    let caja = document.getElementById("caja");
    let boton= document.getElementById("boton");
    let botonn= document.getElementById("botonn");
    let titulo = document.getElementById("titulo");
    let letra = document.getElementById("letra");
    let letras = document.getElementById("letras");
        
function pastel(){
    titulo.style.color="#5086C1";
    fondo.style.background="#5086C1";
    caja.style.backgroundColor="#B9F1B3";
    boton.style.background="white";
    botonn.style.background="white";
    boton.style.color="black";
    letras.style.color="black";
    letra.style.color="black";
    letra.style.background="white";
    }
    function oscuro(){
        titulo.style.color="white";
        fondo.style.background="grey";
        caja.style.backgroundColor="black";
        boton.style.background="#474242";
        botonn.style.background="#474242";
        boton.style.color="white";
        letras.style.color="white";
        letra.style.color="white";
        letra.style.background="#474242";
        }


   
