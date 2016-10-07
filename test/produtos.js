var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function(){

    beforeEach(function(done){
        var con = express.infra.connectionFactory();
        con.query("delete from livros",function(ex,result){
            if(!ex){
                done();
            }
        });
    });

    it('#Listagem de Produtos JSON',function(done){
        request.get('/produtos')
        .set('Accept','application/json')
        .expect('Content-Type',/json/)
        .expect(200,done);
    });

      it('#Validacao de Cadastro de Produto ',function(done){
        request.post('/produtos')
        .send({titulo:"",descricao:"novo livro"})
        .set('Accept','application/json')
        .expect(400,done);
    });
    it('#Cadastro de Produto ',function(done){
        request.post('/produtos')
        .send({titulo:"harry potter",descricao:"novo livro",preco:300.00})
        .expect(302,done);
    });
});