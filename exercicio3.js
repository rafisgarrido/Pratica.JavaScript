function func(horas, salario){
const trabalho = (horas * salario * 22) 
const imp = trabalho - (trabalho * 0.25)
const resultado = `Salário igual a R$ ${imp} `
return resultado
}

console.log(func(6, 40))