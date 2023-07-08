/*Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro. */ 
function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto) /*O método estático Object.assign() copia todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino modificado */
    delete copia[nomeDaPropriedade]
    Object.is(removerPropriedade(objeto))
    return copia
    }
 

/*A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo. */ 