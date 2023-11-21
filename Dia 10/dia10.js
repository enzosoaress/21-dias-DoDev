// let nomes = [];
// let continuar = true;
// let posicaoDoArray = 0;

// while(continuar){
//     let nomeInserido = prompt("Insira um nome")
//     nomes[posicaoDoArray] = nomeInserido

//     let desejaContinuar = prompt("Digite 1 caso queira adicionar outro nome")
//     if(desejaContinuar != "1"){
//         continuar = false
//         continue;
//     }

//     posicaoDoArray++
// }

//=====================================================================================

// const array = [];
// const indice = [];
// let contadorIndice = 0;

// const numeroProcurado = parseInt(prompt("Digite o número que deseja procurar"))

// for (let index = 0; index < 10; index++) {
//     const elemento = parseInt(prompt(`Digite o elemento ${index + 1}:`))
//     array [index] = elemento
    
// }

// for(let index = 0; index < 10; index++){
//     if(array[index] === numeroProcurado){
//         indice[contadorIndice] = index
//         contadorIndice++
//     }
// }

// console.log(`O número ${numeroProcurado} foi encontrado no índices: ${indice}`)

//======================================================================================

// let array = []
// let arrayInvertido = []

// for (let i = 0; i < 5; i++) {
//     let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"))
//     array[i] = numero
    
// }

// console.log("Número original: " + array)

// let contador = 4

// for (let i = 0; i < 5; i++) {
//     arrayInvertido[i] = array[contador]
//     contador--
    
// }

// console.log("Array invertido: " + arrayInvertido)

//=======================================================================================

// let array = []
// let arrayInvertido = []
// let quantidade = parseInt(prompt("Insira a quantidade de números que deseja inserir:"))

// for (let i = 0; i < quantidade; i++) {
//     let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"))
//     array[i] = numero
    
// }

// console.log("Número original: " + array)

// let contador = quantidade - 1

// for (let i = 0; i < quantidade; i++) {
//     arrayInvertido[i] = array[contador]
//     contador--
    
// }

// console.log("Array invertido: " + arrayInvertido)


//==============================================================================

// let numero = parseInt(prompt("Digite um número inteiro e positivo:"))
// let fibonacci = []
// fibonacci [0] = numero - 1
// fibonacci [1] = numero

// for (let i = 2; i < 10; i++) {
//   fibonacci[i] = fibonacci [i - 1] + fibonacci[i - 2]
// }

// console.log("Fibonacci: " + fibonacci)