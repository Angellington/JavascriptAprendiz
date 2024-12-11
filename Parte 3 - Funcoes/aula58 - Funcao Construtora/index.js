// Função Construtura -> objetos
// Função Fabrica -> Objetos

// Construtora -> Pessoa (new)

// Não precisa de return
function Pessoa(nome, sobrenome){
    // Atributos e Método Privados
    const ID = 123212;

    const metodoInterno = () => {

    };

    // Atributos e Métodos Públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou metodo')
    };
}



const p1 = new Pessoa("Minerva", "Alves");
const p2 = new Pessoa("SuperRetro", "bits");
const p3 = new Pessoa("Angel", "Wellington");

console.clear()
console.log(p3.nome)
p2.metodo()