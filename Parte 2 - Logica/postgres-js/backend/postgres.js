/* Trazendo a dependencia do npm*/
const { Client } = require('pg');

/* Dados para entrar em um banco de dados*/
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'JavascriptDB',
    password: '2005',
    port: 5432,
});

/* Conectar a um banco de dados */

// async function run(){
//     try {
//         await client.connect()
//         console.log('Conectado ao PostgreSQL')


//         //cONSULTA PARA ENCONTRAR USUARIOS CUJO NOME COMEÇA COM "I"
//         const res = await client.query("SELECT * FROM users WHERE first_name LIKE 'Minerva'");
//         console.log(res.rows);
//     } catch(err) {
//         console.error('Erro ao executar a consulta', err.stack)
//     } finally {
//         await client.end()
//     }
// }

// run()

//Em uma variavel
// client.connect()
//   .then(() => {
//     console.log('Conectado ao PostgreSQL');
    
//     // Definindo a consulta SQL em uma única linha
//     const query = "SELECT * FROM users WHERE first_name LIKE 'I%'";
    
//     return client.query(query);
//   })
//   .then(res => {
//     console.log(res.rows); // Exibindo os resultados da consulta
//   })
//   .catch(err => {
//     console.error('Erro ao executar a consulta', err.stack);
//   })
//   .finally(() => {
//     client.end(); // Fechar a conexão
//   });

client.connect()
  .then(() => {
    console.log('Conectado ao PostgreSQL')

    const insert = "INSERT INTO users (first_name, last_name) VALUES ('Annabel', 'Iasah'), ('Farofa', 'Fitos')";
 
    return client.query(insert); //Levando os dados inseridos ao Banco
  })
  .then (res => {
    console.log('Dados Inseridos'); 
  })
  .catch(err => {
    console.error('Erro', err.stack);
  })
  .finally(() => {
    client.end() // Encerrar a conexão
  })

  