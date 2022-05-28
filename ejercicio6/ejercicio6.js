document.getElementById("boton").addEventListener("click",palindromo);
function palindromo(){


let palabras = String(document.getElementById('palabra').value);
let palabraReves = "";
var k = palabras.length;
for(var i = 0;i<=palabras.length;i++){
    
    let caracter = palabras.charAt(k);
    palabraReves = palabraReves + caracter;
    k--;
   

}
if(palabras.length>1){
    if(palabraReves == palabras){

document.getElementById('resultado').innerHTML="La palabra al reves es "+palabraReves+", si es polindroma.";

} else {

    document.getElementById('resultado').innerHTML="No es polindroma , si lo fuera sería :"+palabras+palabras.split("").reverse().join("")


}
}else{
    document.getElementById('resultado').innerHTML="ERROR - Introduzca una palabra válida."

}

}function Solo_Texto(e) {
    var code;
    if (!e) var e = window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    var character = String.fromCharCode(code);
    var AllowRegex  = /^[\ba-zA-Z\s-]$/;
    if (AllowRegex.test(character)) return true;     
    return false; 
}
