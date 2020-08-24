document.querySelector("#bodys").addEventListener("keydown",keydownFunction);
document.querySelector("#bodys").addEventListener("keyup",keyupFunction);

function keydownFunction() {
    document.querySelector("#bodys").style.backgroundColor = "red";
  }
  
  function keyupFunction() {
    document.querySelector("#bodys").style.backgroundColor = "purple";
  }