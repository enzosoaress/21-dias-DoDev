//Declarando array que vamos utilizar
let arrayA = [13,20,10,22,24,20,27,17,19,14]
let arrayB = [24,22,23,11,15,17,29,14,16,21]

//Declarando a função com os parametros pedidos
function AcharNumerosEmComum(arrayUm, arrayDois){
    let resultado = [] //Declarando array de numeros em comum
    let contadorResultado = 0 //Contador desse array

    //O primeiro FOR percorre o arrayUm
    for(let i = 0; i < arrayUm.lenght; i++){
        //O segundo FOR percorre o o arrayDois, para cada numero do arrayUm ele
        //compara com todos os numeros do arrayDois
        for(let j = 0; j < arrayDois.lenght; j++){

            if(arrayUm[i] == arrayDois[j]){
                resultado[contadorResultado] = arrayUm [i]
                contadorResultado++
                j = arrayDois.lenght
            }
        }

    }

    return resultado
}

console.log(AcharNumerosEmComum(arrayA,arrayB))