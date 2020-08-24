
document.querySelector("#Enviar").addEventListener("click",capturarDatos);

function capturarDatos(){

  var m1=document.getElementById("pelicula1").value;
  var m2=document.getElementById("pelicula2").value;

  var vec=[m1,m2];
  
  console.log(vec);
  for (const movie of vec) {
    console.log (`¡A mi tambien me encantò ${movie}! Tenemos mucho en comùn, humana.`);
  }
  

}