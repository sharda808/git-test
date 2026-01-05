const mysql = require('mysql2');
 const pool = mysql.createPool({
host:'localhost',
user:'root',
password:'Add@123456',
database:'airbnb'
 }
 );

  
 module.exports = pool.promise();