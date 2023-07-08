/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array. */
function soma(array){
    let resultado = 0
    array.forEach(array => resultado += array)//array.forEach(funcao([valorAtual, índice, array]), argumentoThis)
    return resultado //O método forEach() executará uma função para cada elemento presente em um array.
}

console.log (soma ([2, 5, 6]))