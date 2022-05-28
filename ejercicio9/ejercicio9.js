document.getElementById("boton").addEventListener("click",meses);
function meses(){

    const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

    let mess = Number(document.getElementById('mes').value);
    let numeroMes = mess - 1;
    let respuesta;
   if(numeroMes == -1){
    respuesta = "No has elegido un número";
   }else{
    respuesta = MESES[numeroMes];
}
    document.getElementById('nombremes').innerHTML= respuesta;





}