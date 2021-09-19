//configurando o banco de dados

module.exports={ //exportando algumas informações

    development:{ //conexão para desenvolvimento
        client:'mysql', //nome do banco de dados utilizado
        connection:{ //objeto
            host:'', //ip do servidor
            user:'root', //nome usuário do banco
            password:'', //senha do banco
            database:'bancoProd' //nome do banco criado
        }
    }

}