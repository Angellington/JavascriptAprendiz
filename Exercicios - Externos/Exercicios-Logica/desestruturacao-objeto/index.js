console.clear()

const usuario = {
    nome: 'Minerva Alves',
    idade: 28,
    email: 'minervalves@email.com',
    endereco: {
        cidade: 'Esteio',
        estado: 'RS'
    }
};

//Tarefa:
// 1. Desestruture o objeto `usuario`para obter `nome`, `idade`, e `email`
const { nome, idade, email } = usuario;
// 2. Exiba esses valores no console
console.log(nome, idade, email)