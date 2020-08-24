
document.querySelector("#Boton").addEventListener("click",imprimirNombre);


function imprimirNombre(){
    var nombre=document.querySelector("#name").value;

    console.log("El nombre ingresado es: "+nombre);
}