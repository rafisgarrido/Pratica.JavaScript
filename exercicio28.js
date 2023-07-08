/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro */

function filtro (digito, numeros){
    return numeros.filter (numero => {
        const filtroFinal = String(numero).length
        return filtroFinal === digito 
    })
}
console.log(filtro(2,[23,562,3,54]))