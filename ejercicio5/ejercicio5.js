document.getElementById("boton").addEventListener("click",MayusMinus);
function MayusMinus(){


    let caracteres = String(document.getElementById('caracter').value);
    if(caracteres.length){
            if(caracteres == caracteres.toUpperCase()) {

                document.getElementById('tipoCadena').innerHTML="Está en mayúsculas";
        
            } else if (caracteres == caracteres.toLocaleLowerCase()){

                document.getElementById('tipoCadena').innerHTML="Está en minúsculas";
        
            } else {
                document.getElementById('tipoCadena').innerHTML="No está ni en mayúsculas ni en minúsculas , hay una mezcla.";

            }
    }else{
        document.getElementById('tipoCadena').innerHTML="No se ha introducido un carácter.";
    }
    }
    function Solo_Texto(e) {
        var code;
        if (!e) var e = window.event;
        if (e.keyCode) code = e.keyCode;
        else if (e.which) code = e.which;
        var character = String.fromCharCode(code);
        var AllowRegex  = /^[\ba-zA-Z\s-]$/;
        if (AllowRegex.test(character)) return true;     
        return false; 
    }

            