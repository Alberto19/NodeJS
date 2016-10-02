var mysql = require('mysql');

function createDbConnection(){
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'nodejs'
    });
};
//wrapper
module.exports = function(){
    return createDbConnection();
}

