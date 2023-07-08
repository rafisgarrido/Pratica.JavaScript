/*Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário. */
function triangle(b,h){
    const area = ((b*h)/2)
    return area.toFixed(2) // toFixed fixa o número de casas decimais informada
}
console.log(triangle(5.56, 6.54))