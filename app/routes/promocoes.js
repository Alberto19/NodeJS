module.exports = function(app){

    app.get('/promocoes/form',function(req,res){
        var con = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(con);
            ProdutosDAO.lista(function(err,result){
                res.render('promocoes/form',{lista:result});
            });
        con.end();
    });

    app.post('/promocoes',function(req,res){
        var promocao = req.body;
        app.get('io').emit('novaPromocao',promocao);
        res.redirect('promocoes/form');

    });
}