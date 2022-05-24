var nombre= document.getElementById('name');
var email=document.getElementById('email');
var error=document.getElementById('error');
error.style.color='red'

function myFunction() {
    // Toma el valor del campo input con el id="number"
    let x = document.getElementById("number").value;
    
    let text;

    if (isNaN(x) || x > 120 || x < 15) {// Si x no es un numero o no es menor a 120 o no es mayor a 15, es un numero invalido
      text = "Ingreso no valido";

    } else {
      text = "Ingreso OK";
    }
    document.getElementById("demo").innerHTML = text;
  
    var mensajesError=[];

    if (nombre.value===null || nombre.value===''){
       mensajesError.push('Ingresa tu nombre!');
    }
    if (email.value===null || email.value===''){
      mensajesError.push('Ingresa tu email!');
   }
    error.innerHTML= mensajesError.join(' ,');
    
    return false;  
  }

