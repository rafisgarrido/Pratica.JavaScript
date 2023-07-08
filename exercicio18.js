/*Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.*/

function despesas(objeto){
    var total = 0
    for( let item of objeto)
    total += item.preco
    return total
}
console.log(despesas[
    { nome: "agua", local: "casa", preco: 100 },
    { nome: "luz", local: "casa", preco: 80 },
    { nome: "mercado", local: "casa", preco: 1000 }
])