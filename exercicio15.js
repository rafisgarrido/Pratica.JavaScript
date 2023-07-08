/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.*/
function numeros(array){
    const resultado = []
    for (let item of array)
    if(item%2 == 0) // % corresponde ao resto da divisão
    resultado.push(item)
    return resultado
}
console.log(numeros([2,5,6,7,8,9,10]))