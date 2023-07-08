/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela */

function counter(word){
    const frase = word.split(" ") //O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
    return frase.length
}
const word = "Oi Rafaela!"
console.log (counter(word))