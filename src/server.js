const express = require('express'); //importando o express
const routes = require('./routes'); // Importando o routes


const app = express(); //dei o nome 'app' para minha aplicação e fiz ela receber o express
app.use(express.json()); //dizendo para o express que vou utilizar o json
app.use(routes);//falando para a aplicação utilizar o routes.

app.listen(3333, ()=> console.log('Servidor ON - Rodando na porta 3333')); //pegar a aplicação e pedir pra ela escutar a porta 3333