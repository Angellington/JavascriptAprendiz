function CriarLivro(titulo, autor, anoDePublicacao, genero){
    this.titulo = titulo;
    this.autor = autor;
    this.anoDePublicacao = anoDePublicacao;
    this.genero = genero;

    this.informacao = () => {
        return `O título do livro é: ${this.titulo}\nAutor: ${this.autor}\nPublicação: ${this.anoDePublicacao}\nGênero: ${this.genero}`;
    }
}

const livro1 = new CriarLivro("Um livro para a Garota B", "Minerva", 2025, "Drama, Romance, Escolar");

console.log(livro1.informacao())
