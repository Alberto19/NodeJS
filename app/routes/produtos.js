
module.exports = function(app){

var listaProdutos = function(req,res){
    var con = app.infra.connectionFactory();
    var ProdutosDAO = new app.infra.ProdutosDAO(con);

        ProdutosDAO.lista(function(err,result){
            res.render('produtos/lista',{lista:result});
        });
    con.end();
    };

    app.get('/produtos',listaProdutos);

    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
        });

    app.post('/produtos/salva',function(req,res){
        
        var produto = req.body;
        
        var con = app.infra.connectionFactory();
        var ProdutosDAO = new app.infra.ProdutosDAO(con);
        ProdutosDAO.salva(produto,function(err,result){
            res.redirect('/produtos');
        });
    });    
}
