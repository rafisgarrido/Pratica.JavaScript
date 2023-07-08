/*Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array. */

function filtroSegundoMaiorNumero(numeros){
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaiorNumero = Math.max(...numeros)
    return segundoMaiorNumero
}
console.log(filtroSegundoMaiorNumero([0, 24, 62, 562, 365]))