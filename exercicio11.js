/*Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:*/


function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop() //The pop() method removes the last element from an array
    return [primeiroElemento, ultimoElemento]
    }
    console.log(receberPrimeiroEUltimoElemento([10, 20, 50, 60, 70, 80]))
    