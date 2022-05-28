/* javascript para el ejercicio 2 de portfolio de lenguajes de marcas */
//indicamos al principio del javascript que evento dispara que funcion utilizando el árbol DOM
//document.getElementById("calcular").onclick= *** aquí iría la función ***
//esto se hace cuando la funcion es muy corta , escueta.
//segunda forma de hacerlo(y más corta), con addEventListener
document.getElementById("calcular").addEventListener("click",calcular);

function calcular(){

    // obtener dato (radio)

    // no seria necesario, está en la librería matemática básica de JS
    let radio = Number(document.getElementById('radio').value);
if(radio>0){


    // realizar cálculos
    let valor = radio;
    let circunferencia = 2 * radio * Math.PI;
    let circulo = radio ** 2 * Math.PI;
    let esfera = radio ** 3 *Math.PI;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados?????

    //primer nodo q refefactorizar y enganchado al árbol original
    //1- crear el nodo li
    let nuevoNodo = document.createElement("li");
    // 2- meter contenido en el nodo: el resultado
    nuevoNodo.innerHTML="Longitud circunferencia: "+circunferencia.toFixed(2)+" | Área círculo: "+circulo.toFixed(2)+" | Volumen esfera: "+esfera.toFixed(2);
    
    //3- enganchar el nodo en la lista padre
    document.getElementById("resultados").appendChild(nuevoNodo);
    

    document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es : "+circunferencia.toFixed(2);

    document.getElementById("circulo").innerHTML="El área del círculo es : "+circulo.toFixed(2);

    document.getElementById("esfera").innerHTML="El volumen de la esfera es : "+esfera.toFixed(2);
}else{

}}