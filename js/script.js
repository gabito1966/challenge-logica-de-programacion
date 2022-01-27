/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var botonEncriptado = document.querySelector("#btn-encriptar");
var textoEncriptado = document.querySelector("#msg");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var botonLimpiar = document.querySelector("#btn-clean");
var textArea = document.getElementById("msg");
var textoCopiado = document.getElementById("texto-copiado");
var copy = document.getElementById("btn-copy");


window.onload = function () {
    document.getElementById("escritura").focus();
}

botonCopiar.addEventListener("click", function(event){
    textoEncriptado.select(); 
    
    var copytext = document.execCommand('copy');
    if(copytext){
        alert('Texto copiado');
        textArea.value ="";
        } 
});

botonEncriptado.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-texto");

    var texto = form.texto.value;
    encriptarTexto(texto);
    form.texto.value ="";
});


function validarTexto(entrada){
    var texto = entrada.value;
    var validar = new RegExp("[^a-z\#\&\ ]+");
    if (validar.test(texto)){
        texto = texto.substr(0,texto.length-1)
    } 
    entrada.value = texto;    
}

function encriptarTexto(texto){    
    let arr = Array.from(texto);
    var texto_encriptado = "";
    for(var i=0; i <arr.length; i++){
        if(arr[i] == "a"){
            arr[i]= "ai";
        }else 
        if(arr[i] == "e"){
            arr[i]= "enter";
        }else if(arr[i] == "i"){
            arr[i]= "imes";
        }else if(arr[i] == "o"){
            arr[i]= "ober";
        }else if(arr[i] == "u"){
            arr[i]= "ufat";
        }
        texto_encriptado = texto_encriptado + arr[i];
    }
    textoEncriptado.value = texto_encriptado;

}

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var form = document.querySelector("#form-texto");

    var texto = form.texto.value;
    desencriptarTexto(texto);
});

function desencriptarTexto(texto){

    texto=texto.replace(/ai/g, 'a');
    texto=texto.replace(/enter/g, 'e');
    texto=texto.replace(/imes/g, 'i');
    texto=texto.replace(/ober/g, 'o');
    texto=texto.replace(/ufat/g, 'u');

    textoEncriptado.value = texto;
}
botonLimpiar.addEventListener("click", function(event){
    event.preventDefault();
    textArea.value ="";
    var form = document.querySelector("#form-texto");
    form.texto.value ="";
    textoCopiado.innerHTML ="";
    document.getElementById("escritura").focus();
});

botonCopiar.addEventListener("click", botonCopiar);
