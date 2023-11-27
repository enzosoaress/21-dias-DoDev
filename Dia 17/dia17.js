//Criando classe hotel
class Hotel {
    Id
    Nome
    Categoria
    Endereco
    Telefone

    constructor(id, nome, categoria, endereco, telefone){
        this.Id = id
        this.Nome = nome
        this.Categoria = categoria
        this.Endereco = endereco
        this.Telefone = telefone

    }
}
//Criando classe reserva
class Reserva {
    Id
    IdHotel
    NomeResponsavel
    DiaEntrada
    DiaSaida

    constructor(id, idHotel, nomeResponsavel, diaEntrada, diaSaida){
        this.Id = id
        this.IdHotel = idHotel
        this.NomeResponsavel = nomeResponsavel
        this.DiaEntrada = diaEntrada
        this.DiaSaida = diaSaida
    }
}
//Criando Arrays
let hoteis = []
let reservas = []
let idHotel = 1 
let idReservas = 1

//Função para cadastrar hotéis
function CadastrarHotel() {
    let nome = prompt("Digite o nome do hotel")
    let categoria = prompt("Digite a categoria do hotel")
    let endereco = prompt("Digite o endereço do hotel")
    let telefone = prompt("Digite o telefone do hotel")
    let hotel = new Hotel(idHotel, nome, categoria, endereco, telefone)
    idHotel++ 
    hoteis.push(hotel)
}

//Função para cadastrar reservas
function CadastrarReserva() {
    let idHotel
    let existe = false 

    do{
        idHotel = parseInt(prompt("Digite o ID do hotel"))
        for(let i = 0; i < hoteis.length; i++){
            if(idHotel == hoteis[i].Id){
                i = hoteis.lenght 
                existe = true
            }else if(i == hoteis.lenght - 1){
                console.log("ID do hotel não cadastrado")
            }
        }
    } while(existe)

    let nome = prompt("Digite o nome do responsável pela reserva")
    let diaEntrada = parseInt(prompt("Digite o dia de entrada no hotel"))
    let diaSaida 

    do{ 
        diaSaida = prompt("Digite o dia de saída do hotel")
        if(diaSaida < diaEntrada){
            console.log("O dia de saída deve ser depois do dia de entrada")
        }
    }while(diaSaida > diaEntrada)
    
    let reserva = new Reserva(idReserva, idHotel, nome, diaEntrada, diaSaida)
    idReserva++
    reservas.push(reserva)
}

//Função para procurar reservas pelo hotel
function ProcurarReservasPeloHotel(idHotel){
    reservas.forEach(reserva => {
        if(idHotel == reserva.idHotel){
            let i = idHotel - 1
            console.log("Hotel:", hoteis[i].Nome)
            console.log("Responsavel:", reserva.Responsavel)
            console.log("Dia de entrada:", reserva.DiaEntrada)
            console.log("Dia de saída:", reserva.DiaSaida)
        }
    })
}
//Função para procurar hotel pela reserva
function ProcurarHotelPelaReserva(idReserva){
    let idHotel = reservas[idReserva -1].IdHotel
    console.log("Hotel:", hoteis[idHotel - 1].Nome)
    console.log("Endereço:", hoteis[idHotel - 1].Endereco)
    console.log("Dia de entrada:", reservas[idReserva - 1].DiaEntrada)
    console.log("Dia de saída:", reservas[idReserva - 1].DiaSaida)
}

//Função para procurar reserva pelo responsável
function ProcurarReservaPeloNome(nome){
    for(let i = 0; i < reservas.lenght; i++) {
        if(nome == reservas[i].Responsavel){
            console.log("ID da reserva: " + reservas[i].Id)
            console.log("Hotel: " + hoteis[(reservas[i].IdHotel) - 1].Nome)
        }
    }
}

//Função para procurar hotéis pela categoria
function ProcurarHotelPelaCategoria(categoria) {
    let hoteisProcurados = []
    for(let i = 0; i < hoteis.lenght; i++) {
        if(categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
    }
    return hoteisProcurados
}

//Função para atualizar telefone do hotel
function AtualizarTelefone(idHotel, telefone) {
    hoteis[idHotel - 1].Telefone = telefone
    console.log("Número do hotel atualizado!")
}

//Fluxo de funcionamento 
let continuar = true
do{
    let opcao = prompt("Escolha uma opção: \n1- Cadastrar hotel \n2 - Cadastrar reserva \n3 - Procurar reserva pelo hotel" +
    "\n4 - Procurar hotel pela reserva \n5 - Procurar reserva pelo responsável \n6 - Procurar hotéis por categoria" +
    "\n7 - Atualizar telefone de um hotel \n8 - Encerrar o programa")

    switch(opcao) {
        case "1":
            CadastrarHotel()
            break;
        case "2":
            CadastrarReserva()
            break;
        case "3":
            ProcurarReservasPeloHotel()
            break;
        case "4":
            ProcurarHotelPelaReserva()
            break;
        case "5":
            ProcurarReservaPeloNome()
            break;
        case "6":
            ProcurarHotelPelaCategoria()
            break;
        case "7":
            AtualizarTelefone()
        case "8":
            console.log("Programa encerrado")
            continuar = false
            break;
        default:
            console.log("Opção inválida!")
            break;
    }
} while(continuar)