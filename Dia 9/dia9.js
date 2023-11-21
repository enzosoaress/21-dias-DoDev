// let nome = prompt("Diga seu nome")
// let idade = parseInt(prompt("Informe a sua idade"))
// let peso = prompt("Insira seu peso")
// let altura = prompt("Insira a sua altura")
// let profissão = prompt("Informe a sua profissão")

// console.log("Olá, " + nome + "! Você tem " + idade + " anos, " + "é " + profissão + ", tem " + altura + "m e pesa " + peso + "kg.")

// //conferindo maioridade

// if(idade >= 18){
//     console.log("Tá liberado tomar umas geladas!")
// }else{
//     console.log("Sem geladas pra você!")
// }

// //calculando dias de vida

// let meses = idade * 12
// console.log("Meses vividos: " + meses)

// let semanas = idade * 52
// console.log("Semanas vividas: " + semanas)

// let dias = idade * 365
// console.log("Dias vividos: " + dias)


// //calculando IMC

// let IMC = peso / (altura * altura)

// if(IMC < 18.5){
//     console.log("Magreza")
// }else if(IMC > 18.5 || IMC <= 24.9){
//     console.log("Normal")
// }else if(IMC > 24.9 || IMC <= 30){
//     console.log("Sobrepeso")
// }else{
//     console.log("Obesidade")
// }


// //Descobrindo ano nascimento

// let anoAtual = 2023
// let anoNascimento = anoAtual - idade
// console.log("Você nasceu em: " + anoNascimento)


// //Exibindo anos e idades

// let anoVivido = anoNascimento
// let idadeAtual = 0

// for (let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++) {
//     console.log(anoVivido + " - " + idadeAtual + " anos de idade")
//     idadeAtual++
    
// }


// //loop do While
// let continuar = true
// do{
//     for (let anoVivido = anoNascimento; anoVivido <= anoAtual; anoVivido++) {
//         console.log(anoVivido + " - " + idadeAtual + " anos de idade")
//         idadeAtual++
        
//     }

//     let continuar = prompt("Deseja continuar? s/n")
// }while(continuar == "s")

// //RH DoDev

let confirmar = "n"
while(confirmar != "s"){
    let nome = prompt("Insira o seu nome")
    let idade = parseInt(prompt("Insira a sua idade"))
    let salario = parseFloat(prompt("Informe o seu salário atual"))
    console.log("Olá, " + nome + "! Você tem " + idade + " anos e seu salário atual é: R$" + salario)
    confirmar = prompt("Você confirma as informações? s/n")

}
//fazendo previsão do salário

aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos")

for (let ano = 1; ano <= 10; ano++) {
    salario += salario * aumento
    aumento *= 2

    console.log((2023 + ano) + " R$ " + salario)
    
}

