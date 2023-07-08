/*Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas. */

function contarCaractere(caractere, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === caractere) {
        count++;
      }
    }
    return count;
  }
  const caractere = 'a';
  const string = 'Abracadabra';
  const quantidade = contarCaractere(caractere, string);
  console.log(`O caractere "${caractere}" se repete ${quantidade} vezes na string "${string}".`);