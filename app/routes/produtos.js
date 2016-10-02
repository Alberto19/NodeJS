
module.exports = function(app){
    app.get('/produtos',function(req,res){
        var con = app.infra.connectionFactory;
        var ProdutosDAO = new app.infra.ProdutosDAO(con);

            ProdutosDAO.lista(function(err,result){
                res.render('produtos/lista',{lista:result});
            });
        con.end();
        });
}
