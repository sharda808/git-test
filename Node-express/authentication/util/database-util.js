// const mysql = require('mysql2');
//  const pool = mysql.createPool({
// host:'localhost',
// user:'root',
// password:'Add@123456',
// database:'airbnb'
//  }
//  );

  
//  module.exports = pool.promise();
const mongodb = require('mongodb');
const MongoClient= mongodb.MongoClient;
const url="mongodb+srv://shardakumari96115_db_user:Add%40123456@airbnb.s8zku2p.mongodb.net/?appName=Airbnb";
let _db;
const mongoConnect = (callback) => {
MongoClient.connect(url)
.then((client) => {
  console.log(client);
  _db = client.db("airbnb");
  callback();
})
.catch(error => {
  console.log('Error came while connecting to mongoDB',error);
});
};
const getDb = () => {
  if(!_db){
throw new Error ('Could not connect to DB')
  }
  return _db;
}
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;