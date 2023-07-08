/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de multiplicação.*/

  function multiplicar(a, b) {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
    realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < b; i++)
    resultado += a
    return resultado
    }
    console.log(multiplicar(5 , 6))