function ProdutosDAO(con){
    this._con = con;
}
ProdutosDAO.prototype.lista = function(callback){
    this._con.query('select * from livros',callback);    
}

module.exports = function(){
    return ProdutosDAO;
};
