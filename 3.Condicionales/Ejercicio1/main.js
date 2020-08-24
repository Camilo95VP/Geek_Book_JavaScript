var avatar = 'http://placehold.it/300x300';
const vacio="";


if(avatar != vacio){
   var llenarUsuario = document.querySelector(".div-usuario");
    llenarUsuario.innerHTML=`<img src="${avatar}">`;
}else{
    alert("No hay nada que mostrar");
}