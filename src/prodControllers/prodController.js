//nessa parte ficará tudo que cada rota irá fazer, assim os controllers serão feitos de forma assíncrona
const knex = require('../database');//importando o knex da pasta database.. que automaticamente procura pelo index

module.exports={ 

    //Criando rotas
    //consultas de dados
    async raiz(req,res){
        const result = await console.log('Servidor requisitado!');

        return res.send('Resposta do Servidor!'); //resposta para o front
    }, //programando para a raiz do servidor



    async produtos(req,res){
        const result = await knex('produtos'); //knex está fazendo uma consulta na tabela produtos e guardou dentro da variável result. Caso seja preciso fazer algum select, seria exatamente depois do 'await'
        console.log('Consulta de dados na tabela produtos realizada!')
        return res.json(result); //resposta para o front os dados do banco
    }, //programando para a raiz do servidor



    async clientes(req,res){
        const result = await knex('clientes'); //consultando a tabela clientes no banco de dados e guardando na variável result

        return res.json(result); //resposta para o front
    } //programando para a raiz do servidor

}