/*Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a
seguir: */

function inverterObjeto(objeto) {
    const novoObjeto = {};
    for (let chave in objeto) {
      if (objeto.hasOwnProperty(chave)) { //é usado para verificar se um objeto possui uma determinada propriedade própria (não herdada). Ele retorna um valor booleano indicando se o objeto possui a propriedade especificada.
        novoObjeto[objeto[chave]] = chave;
      }
    }
    return novoObjeto;
  }
  
  const objetoOriginal = { a: 1, b: 2, c: 3 };
  const objetoInvertido = inverterObjeto(objetoOriginal);
  console.log(objetoInvertido);