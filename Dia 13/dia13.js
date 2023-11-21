// //Apresentando computador

// class Computador{
//     Tipo
//     Processador
//     Video
//     Armazenamento
//     MemoriaRam
//     Ssd

//     constructor(tipo, processador, video, armazenamento, memoriaRam, ssd){
//         this.Tipo = tipo
//         this.Processador = processador
//         this.Video = video
//         this.Armazenamento = armazenamento
//         this.MemoriaRam = memoriaRam
//         this.Ssd = ssd
//     }

//     ExibirInformacoes(){
//         console.log("Informações do computador");
//         console.log(`Tipo: ${this.Tipo}`);
//         console.log(`Processador: ${this.Processador}`);
//         console.log(`Vídeo: ${this.Video}`);
//         console.log(`Armazenamento: ${this.Armazenamento}`);
//         console.log(`Memória Ram: ${this.MemoriaRam}`);
//         console.log(`SSD: ${this.Ssd}`);

//     }    
// }

// const meuComputador = new Computador("notebook", "Ryzen 7", "Dedicado", 1000, 16, true);
// meuComputador.ExibirInformacoes();


//=========== Exercício 2 ===========

class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao

    constructor(nome, potencia, velocidadeMaxima, aceleracao){
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }

}

class Corrida {
    Nome
    Tipo
    Distancia
    Participantes
    Vencedor

    constructor(nome, tipo, distancia){
        this.Nome = nome
        this.Tipo = tipo
        this.Distancia = distancia
        this.Participantes = []
        this.Vencedor = ""
    }

    DefinirVencedor(){
        let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia)
        let vencedor = this.Participantes[0]

        for(let index = 1; index < this.Participantes.length; index++){
            let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia)
            if(tempo < menorTempo){
                menorTempo = tempo
                vencedor = this.Participantes[index]
            }
        }

        return this.Vencedor = vencedor
    }

    ExibirVencedor(){
        alert("O vencedor é: " + this.Vencedor.Nome)
    }
}

let corrida = new Corrida("Monza", "Fórmula 1", 60000)

corrida.Participantes[0] = new Carro("Kicks", 120, 160, 5)
corrida.Participantes[1] = new Carro("Marea", 210, 200, 9)
corrida.Participantes[2] = new Carro("Peugeot 206", 300, 220, 10)

corrida.DefinirVencedor()
corrida.ExibirVencedor()