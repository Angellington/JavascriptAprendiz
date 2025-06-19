/*
Javascript é baseado em protótipos para passar propriedades de um objeto para o outro


Definição:
Protótipo é o termo usado para se referir ao que foi criado pela
primeira vez, servindo de modelo ou molde para futuras produções

TOdos os objetos tem uma referencia ao prototipo, referencia da propriedade construtora da função
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// insstanica ( a criar um novo objeto a partir da construtora)
const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('Maria', 'Oliveira');
const pessoa3 = new Pessoa('João', 'Silva'); 

const data = new Date();

console.log(pessoa1.nomeCompleto());
console.dir(pessoa1)

// O proto é o pai de todos os métodos
Pessoa.prototype.estouAqui = 'Hahahahaha'

console.log()