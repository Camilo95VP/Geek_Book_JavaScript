document.querySelector('#BotonCambiar').addEventListener('click',cambiarTexto);


function cambiarTexto(){
    var textoH1=document.querySelector('#titulo');

    textoH1.innerHTML='<h1>Mi primer click, ¡ole yo y la mujer que me parió!</h1>';
}

