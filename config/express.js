var express = require('express');
var load = require('express-load');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function(){
    var app = express();

    app.use(express.static('./app/public'));
    app.set('view engine', 'ejs');
    app.set('views','./app/views');

    app.use(bodyparser.urlencoded({extended: true}));
    app.use(bodyparser.json());
    app.use(expressValidator());

    load('routes', {cwd: 'app'})
        .then('infra')
        .into(app);
 

    app.use(function(req,res,nex){
        res.status(404).render('erros/404');
        next();
    });
    app.use(function(err,req,res,next){
        if(process.env.NODE_ENV != 'test'){
            res.status(500).render('erros/500');
            return;
        }
        next(err);
    });

       return app;
}
