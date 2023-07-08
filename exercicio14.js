/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. */

function objetoParaArray(objeto){
    const resultado = []
    for (let chave in objeto )
    resultado.push([chave, objeto[chave]])
    return resultado
}
console.log(objetoParaArray({
    nome: "Rafaela",
    idade: 23,
    profissão: "quimica"
}))