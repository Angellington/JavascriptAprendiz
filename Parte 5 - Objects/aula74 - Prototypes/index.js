function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// Instancias
const pessoa1 = new Pessoa('Minerva', 'Alves');
const pessoa2 = new Pessoa('Wellington', 'Ferreira')
const data = new Date(); // Função construtora

console.dir(data)
console.dir(pessoa1)
console.dir(pessoa2)