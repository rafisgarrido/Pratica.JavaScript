/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.*/ 

function elementos (array){
    const resultado =[]
    for (let item of array) // para cada item do array
    if(typeof item === "number") // se no item tiver números
    resultado.push(item) // puxe todos os números
    return resultado
}
console.log( elementos(["aeiou", 12, 13, "abcd", 25, "123456"]))
