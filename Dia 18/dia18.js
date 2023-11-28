class Livro{
    Titulo
    Autor
    Editora
    Ano
    Disponibilidade = true

    constructor(titulo, autor, editora, ano){
        this.Titulo = titulo
        this.Autor = autor
        this.Editora = editora
        this.Ano = ano
    }
}

let livros =[]
livros.push(new Livro("Livro1", "Marcos", "Editora A", 2001))
livros.push(new Livro("Livro2", "Julio", "Editora B", 1990))
livros.push(new Livro("Livro3", "Carlos", "Editora C", 2004))
livros.push(new Livro("Livro4", "João", "Editora B", 2007))
livros.push(new Livro("Livro5", "Marcos", "Editora A", 2011))

class Biblioteca{
    Nome
    Endereco
    Telefone
    AcervoLivros = []

    constructor(nome, endereco, telefone, acervo){
        this.Nome = nome
        this.Endereco = endereco
        this.Telefone = telefone
        this.AcervoLivros = acervo
    }

    BuscarLivroPeloTitulo(titulo){
        this.AcervoLivros.forEach (livro => {
            if(livro.Titulo == titulo){
                console.log(livro)
            }
        })
    }

        EmprestarLivro(titulo){
            let emprestado = false
            this.AcervoLivros.forEach (livro => {
                if(livro.Titulo == titulo){
                    if(livro.Disponibilidade == true){
                        livro.Disponibilidade = false
                        emprestado = true
                    }
                }
            })

            if(emprestado){
                return true
            }else{
                return false
            }
        }

        DevolverLivro(titulo){
            livros.forEach (livro => {
                if(livro.Titulo == titulo){
                    livro.Disponibilidade = true
                    console.log("Livro devolvido.")
                }
            })
        }
}

let biblioteca = new Biblioteca("Biblioteca DoDev", "123456", "Rua 2")

biblioteca.BuscarLivroPeloTitulo()
biblioteca.EmprestarLivro()
biblioteca.DevolverLivro()