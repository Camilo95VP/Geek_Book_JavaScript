function sinIva(a) {
    
    const result = a;
    return result;
    

}

const precioResult = sinIva(10); 

function conIva(a) {

    const result3 = a* 0.21;
    return result3;

}

const precioconIva = conIva(10);

function sum () {

    const result4 = precioResult + precioconIva;
    return result4;
}

const Total = sum();

console.log("Precio sin IVA: " + precioResult +"," + " IVA: " + precioconIva + " y Total: " + Total);