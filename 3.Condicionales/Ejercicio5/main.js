
const CambioClase = document.querySelector(".success");

if (CambioClase.classList.contains('success')) {
    CambioClase.innerHTML=`<h1>CORRECTO</h1>
                           <p>Los datos son correctos</p>`;
} else if(CambioClase.classList.contains('error')){ 
    CambioClase.innerHTML=`<h1>ERROR</h1>
                            <p>Ha surgido un error</p>`;
  
}else if(CambioClase.classList.contains('warning')){
    CambioClase.innerHTML=`<h1>AVISO</h1>
                            <p>Tenga cuidado</p>`;
}