/* Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais. */
const frase = "Rafaela tem 23 anos";
function acheConsoantes(frase){
    const vogais = /[aeiou]/gi;// para encontrar todas as vogais na frase, independentemente de serem maiúsculas ou minúsculas, e o modificador "g" indica que deve substituir globalmente todas as ocorrências encontradas.
    return frase.replace(vogais, "")
}
 console.log(acheConsoantes(frase))