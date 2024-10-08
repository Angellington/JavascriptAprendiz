console.clear()

const perfil = {
    nome: 'Carlos Andrade',
    idade: 42,
    redesSociais: [
      { nome: 'Twitter', url: 'https://twitter.com/carlos' },
      { nome: 'LinkedIn', url: 'https://linkedin.com/in/carlos' }
    ],
    hobbies: ['Fotografia', 'Música', 'Ciclismo']
  };

// Tarefa:
// 1. Desestruture o objeto `perfil` para obter `nome`, o nome da primeira rede social e o segundo hobby.

const { nome, redesSociais: [{ nome: Twitter }], hobbies: [, iMusica] } = perfil

// 2. Exiba esses valores no console.
console.log(nome, Twitter, iMusica )