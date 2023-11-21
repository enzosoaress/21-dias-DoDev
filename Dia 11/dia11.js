// let alunos = []
// let notasAluno = []
// let contador = 0
// let continuar = true

// while(continuar){
//     let nomes = prompt("Insira o nome do aluno:")
//     let notas = parseInt(prompt("Informe a nota do aluno:"))
//     alunos[contador] = nomes
//     notasAluno[contador] = notas
//     contador++

//     let resposta = prompt("Deseja continuar?\n 1 para continuar\n 2 para encerrar")
//     if(resposta != 1){
//         continuar = false
//     }
// }

// //Exibindo informações
// console.log("Notas dos alunos")
// for(let i = 0; i < alunos.length; i++){
//     console.log(alunos[i] + " - " + notasAluno[i]);

// }

// let somaNotas = 0
// for(let i = 0; i < notasAluno.length; i++){
//     somaNotas += notasAluno[i]
// }

// let media = somaNotas / alunos.length
// console.log("A soma das notas foi: " + somaNotas)
// console.log("A média geral da turma foi: " + media)




//Exercício 2 


let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

while(continuar){
    let modelo = prompt("Insira o modelo do carro: ")
    modelos[contador] = modelo
    let ano = parseInt(prompt("Insira o ano do carro: "))
    anos[contador] = ano
    let valor = parseFloat(prompt("Insira o valor do carro: "))
    valores[contador] = valor
    contador++

    let resposta = prompt("Insira 1 para continuar.")
    if(resposta != 1){
        continuar = false
    }

}

console.log("Carros cadastrados: ")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}

//Ordenar por preço
for(let i = 0; i < valores.length - 1; i++){
    for(let j = 0; j < valores.length - i - 1; j++){
        if(valores[j] > valores[j + 1]){

            let modeloMaiorValor = modelos[j]
            modelos[j] = modelos[j + 1]
            modelos[j + 1] = modeloMaiorValor

            let anoMaiorValor = anos[j]
            anos[j] = anos[j + 1]
            anos[j + 1] = anoMaiorValor

            let maiorValor = valores[j]
            valores[j] = valores[j + 1]
            valores [j + 1] = maiorValor
        }
    }
}

console.log("Carros ordenados pelo preço: ")
for(let i = 0; i < modelos.length; i++){
    console.log(modelos[i] + " - " + anos[i] + " - " + valores[i])
}