console.clear()
const pessoa = {
    nome: 'Lins Soares',
    idade: 34,
    email: 'lins.soares@policiacivil.ce.gov.br',
    endereco: {
        cidade: 'Fortaleza',
        estado: 'CE'
    },
    hobbies: ['Programar', 'Jogos', 'Assembler']
};

// Tarefa:
// 1. Desestruture o objeto `pessoa` para obter `nome`, `estado` (dentro de `endereco`), e o primeiro item da lista de `hobbies`.

const { nome, endereco: { estado }, hobbies: [item1] } = pessoa;
console.log(nome, estado, item1)

