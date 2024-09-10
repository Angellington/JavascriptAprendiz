const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');

const app = express();
const port = 3000;

// Configurar middleware para interpretar os dados do formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do cliente PostgreSQL
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'JavascriptDB',
    password: '2005',
    port: 5432,
});

client.connect()
  .then(() => console.log('Conectado ao PostgreSQL'))
  .catch(err => console.error('Erro ao conectar', err.stack));

// Rota para servir o formulário HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '../index.html');
});

// Rota para processar o formulário
app.post('/submit', (req, res) => {
  const { first_name, last_name } = req.body;

  // Definindo a consulta SQL para inserir dados
  const query = `
    INSERT INTO users (first_name, last_name)
    VALUES ($1, $2)
  `;

  client.query(query, [first_name, last_name])
    .then(() => {
      res.send('Dados inseridos com sucesso!');
    })
    .catch(err => {
      console.error('Erro ao inserir dados', err.stack);
      res.status(500).send('Erro ao inserir dados');
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});