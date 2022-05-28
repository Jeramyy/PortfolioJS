document.getElementById("boton").addEventListener("click",MCD);
function MCD(){
    let numero1 = Number(document.getElementById('num1').value);
    let numero2 = Number(document.getElementById('num2').value);

    if(numero1>0 && numero2>0){
        document.getElementById('resultado').innerHTML=+i1;


   
        var iaux; //auxiliar
        numero1 = Math.abs(numero1); //tomamos valor absoluto
        numero2 = Math.abs(numero2);
        var i1 = Math.max(numero1, numero2); //i1 = el más grande
        var i2 = Math.min(numero2, numero2); //i2 = el más pequeño
      
        do {
          iaux = i2; //guardar divisor
          i2 = i1 % i2; //resto pasa a divisor
          i1 = iaux; //divisor pasa a dividendo
        } while (i2 !== 0);
      
}else{
  document.getElementById('resultado').innerHTML="ERROR - Introduce valores válidos positivos";
}

}

