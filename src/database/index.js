//criando a conexão com o bando
//importando o knexfile e o knex
const knexfile = require('../../knexfile');//configurações de conexão
const knex = require('knex')(knexfile['development']); //knex é o arquivo instalado | encadeando e importando a configuração dele

//exportando o knex
module.exports = knex;