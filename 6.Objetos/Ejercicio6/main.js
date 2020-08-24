const contador = {}
    contador.valorMaximo = 10;
    contador.valorMinimo = 10;
    contador.valorActual = 5;
    contador.valorInicial = 5;
    contador.aumentar = (aum) => `${aum}`;
    contador.disminuir = (min) => `${min}`;
    contador.restablecer = (res) => `${res}`;

console.log(contador.aumentar())


