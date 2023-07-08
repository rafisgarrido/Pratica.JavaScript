/* A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

function palavrasSemelhantes(word, comboWord){
    const result = []
    for (let palavra of comboWord) 
    if(palavra.includes(word))
    result.push(palavra)
    return result
    
}
const word = "batata";
const comboWord = ["batata", "feijao", "arroz", "açucar"];
console.log(palavrasSemelhantes(word,comboWord))