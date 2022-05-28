document.getElementById("boton").addEventListener("click",traduccion);
function traduccion(){

  const MESES = {"Enero":"January","Febrero":"February","Marzo":"March","Abril":"Abril","Mayo":"May","Junio":"June","Julio":"July","Agosto":"August","Septiembre":"September","Octubre":"October","Noviembre":"November","Diciembre":"December"};

  let mess = document.getElementById('palabras').value;
  let respuesta;


 if(mess == 'error'){
  respuesta = "No has elegido un mes";
 }else{
  respuesta = MESES[mess];
}


  document.getElementById('traducciones').innerHTML=respuesta;





}


