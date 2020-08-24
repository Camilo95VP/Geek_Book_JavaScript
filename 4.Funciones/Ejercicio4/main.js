
function CalcularModelo(dimensionesElemento,width,padding,borde){

    if(dimensionesElemento=="border-box"){
        var boxSizing=`${dimensionesElemento} ${width}px ${padding}% ${borde}px`;
    }else{
        var boxSizing=`${dimensionesElemento} ${width}px`;
    }


    console.log(boxSizing);
}

CalcularModelo("content-box",80,1,13);