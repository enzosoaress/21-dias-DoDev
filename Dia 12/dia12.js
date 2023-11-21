let nomes = []
let senhas = []
let contador = 0
let continuar = true

while(continuar){
   let opcao = prompt("O que deseja fazer?\n 1 - Cadastro\n 2 - Login\n 3 - Excluir\n 4 - Encerrar")

   switch(opcao){
    case "1":
        nomes[contador] = prompt("Qual o nome?")
        senhas[contador] = prompt("Qual a senha?")
        contador++

        break;
    case "2":
        let nome = prompt("Qual o nome?")
        let senha = prompt("Qual a senha?")
        let loginValido = false

        for(let i = 0; i < nomes.length; i++){
            if(nome == nomes[i] && senha == senhas[i]){
                loginValido = true
            }
        }

        if(loginValido){
            alert("Login feito com sucesso. Bem-vindo!")
        }else{
            alert("Login ou senha incorretos!")

            break;
        }

    case "3":
        let nomeExcluir = prompt("Qual nome deseja excluir?")
        let nomesAux = []
        let senhasAux = []
        let contadorAux = 0

        for(let i = 0; i < contador; i++){
            if(nomeExcluir == nomes[i]){
                alert("Cadastro excluído com sucesso.")
            } else {
                nomesAux[contadorAux] = nomes[i]
                senhasAux[contadorAux] = senhas[i]
                contadorAux++
            }
        }

        nomes = nomesAux
        senhas = senhasAux
        contador--

        break;

    case "4":
        continuar = false
        console.log("Programa encerrado, obrigado!")
        break;
    default:
        console.log("Opção inválida, escolha outra!")
   }
}