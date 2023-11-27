let fome = prompt("Você está com fome?(s/n")
let dinheiro = prompt("Você tem dinheiro para comer?(s/n)")
let restaurante = prompt("O restaurante está aberto?(s/n)")

if(fome === "n" || dinheiro === "n"){
    console.log("Hoje a janta será em casa")
}else if(fome === "s" && dinheiro === "s" && restaurante === "n"){
    console.log("Peça um delivery")
}else{(fome === "s" && dinheiro === "s" && restaurante === "s")
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

//=========== ONDE COMER ==============
let fome = prompt("Você está com fome?(s/n")
 let dinheiro = prompt("Você tem dinheiro para comer?(s/n)")
 let restaurante = prompt("O restaurante está aberto?(s/n)")

 if(fome === "n" || dinheiro === "n"){
     console.log("Hoje a janta será em casa")
 }else if(fome === "s" && dinheiro === "s" && restaurante === "n"){
     console.log("Peça um delivery")
 }else{(fome === "s" && dinheiro === "s" && restaurante === "s")
     console.log("Hoje o jantar será no seu restaurante preferido!")
 }


// ============ VERIFICANDO SE PODE DIRIGIR ============

let nome = prompt("Insira o seu nome")
let idade = prompt("Insira sua idade")
let temCarta = false
let temCarro = false

let opcaoCarta = prompt("Você tem carta de motorista? (s/n)")
if(opcaoCarta == "s"){
    temCarta = true
}

let opcaoCarro = prompt("Você tem carro? (s/n)")
if(opcaoCarro == "s"){
    temCarro = true
}

if(idade < 18 || !temCarta){
    console.log(nome + ", você não pode dirigir")
}else if(idade >= 18 && temCarta && !temCarro){
    console.log(nome + ", você pode dirigir mas não tem carro.")
}else{
    console.log(nome + ", você será o motorista")
}
