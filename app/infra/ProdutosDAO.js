function ProdutosDAO(con){
    this._con = con;
}
ProdutosDAO.prototype.lista = function(callback){
    this._con.query('select * from livros',callback);    
}
ProdutosDAO.prototype.salva = function(produto,callback){
    this._con.query('insert into livros set ?',produto,callback);    
}

module.exports = function(){
    return ProdutosDAO;
};
