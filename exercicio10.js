/*Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro*/
function string(number){
    let symbol = ''
    for (let i = 0; i < number; i++)
    symbol += '+'
    return symbol
}
console.log(string(5))