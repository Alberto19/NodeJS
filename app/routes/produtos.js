
module.exports = function(app){
    app.get('/produtos',function(req,res){
        var mysql = require('mysql');
        var con = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'nodejs'
        });

        con.query('select * from livros',function(err,result){
        res.render('produtos/lista',{lista:result});
        });

        con.end();

    });
}
