//while e do while

// let condicao = true;
// while(condicao){
//     let idade = Number(prompt("Insira a sua idade"));
//     if(idade < 18){
//         console.log("Você é menor de idade")
//         condicao = false;
//     }
// }

// console.log("Acabou o while")

//========== DO WHILE ==========
//Executa o código pelo menos uma vez

//========== Exercício ==========

// let mediaGeral = 0
// let qtdHomens = 0
// let mulheresAcimaDe7 = 0
// let maiorNotaHomens = 0
// let contador = 1

// while(contador <= 10){
//     let nota = parseInt(prompt("Digite sua nota"));
//     let sexo = prompt("Informe seu sexo\n h - para homem\n m - para mulher")

//     if(sexo === "h"){
//         if(nota > maiorNotaHomens){
//             maiorNotaHomens = nota
//         }
//         qtdHomens ++
//     }

//     if(sexo === "m" && nota > 7){
//         mulheresAcimaDe7++
//     }

//     mediaGeral += nota
//     contador++
// }

// mediaGeral = mediaGeral / 10


// console.log("A média geral dos alunos foi: " + mediaGeral)
// console.log("Quantidade de homens que enviaram nota: " + qtdHomens)
// console.log("Mulheres com nota acima de 7: " + mulheresAcimaDe7)
// console.log("Maior nota entre os homens: " + maiorNotaHomens)


//========== EXERCICIO 2 ==========

// let saldo = 1000
// let maiorValorInserido = 0;
// let somaValoresInseridos = 0;
// let totalTransacoes = 0;
// let continuar = false

// do{
//     const nome = prompt("Insira o seu nome")
//     const CPF = prompt("Insira o seu CPF")
//     const valor = Number(prompt("Insira o valor da transação"))
//     const operacao = prompt("Qual operação deseja fazer?\nS - Saque\nD - Depósito")
    
//     if(valor < 0){
//         console.log("Operação inválida, transação cancelada.")
//     }else if(operacao === "S" && valor > saldo){
//         console.log("Não há saldo suficiente, transação cancelada.")
//     }else if(operacao === "S"){
//         console.log(`Olá, ${nome}(${CPF}. Seu saldo é de: R$${saldo})`)
//         saldo -= valor;
//         totalTransacoes++;
//         somaValoresInseridos += valor;
//         if(maiorValorInserido > valor){
//             maiorValorInserido = valor;
//         }
//     }else if(operacao === "D"){
//             console.log(`Olá, ${nome}(${CPF}. Seu saldo é de: R$${saldo})`)
//             saldo += valor;
//             totalTransacoes++;
//             somaValoresInseridos += valor;
//     }
//     console.log(`Transação efetuada com sucesso! Seu saldo é de: R$${saldo}`)


//     const opcao = prompt("Deseja continuar?\n1 - Continuar\n2 - Parar")
//     if(opcao === "1"){
//         continuar === true
//     }else if(opcao === "2"){
//         continuar = false
//     }else{
//         console.log("Opção inválida, programa encerrado")
//         continuar = false
//     }
// } while(continuar)

// console.log(`Saldo final:R$${saldo}`);
// console.log(`Maior valor inserido:R$${maiorValorInserido}`);
// console.log(`Média dos valores inseridos:R$${(somaValoresInseridos / totalTransacoes)}`);