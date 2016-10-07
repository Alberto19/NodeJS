module.exports = function(app){

    app.get('/',function(req,res){
        var con = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(con);
            ProdutosDAO.lista(function(err,result){
                res.render('home/index',{livros:result});
            });
        con.end();
    });
}