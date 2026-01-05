
// const Favourite = require('./favourite');
// const airbnbDb = require("../util/database-util");

// module.exports = class Home {
//   constructor(houseName,price,location,rating,photoUrl,description){
//     this.houseName = houseName;
// this.price = price;
// this.location = location;
// this.rating = rating;
// this.photoUrl = photoUrl;
// this.description = description;
//   }
//   save(){
// // return airbnbDb.execute(`INSERT INTO new_table (houseName,price,location,rating,photoUrl,description) VALUES ('${this.houseName}',${this.price},'${this.location}',${this.rating},'${this.photoUrl}','${this.description}')`);
// return airbnbDb.execute(`INSERT INTO new_table (houseName,price,location,rating,photourl,description) VALUES(?,?,?,?,?,?)`,[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.description]);
// }
//  static fetchAll(){
//  return airbnbDb.execute("SELECT * FROM new_table")

// }
// static findById(homeId){
// return airbnbDb.execute("SELECT * FROM new_table WHERE id=?", [homeId]);
// }
// static deleteById(homeId){
// return airbnbDb.execute("DELETE FROM new_table WHERE id=?", [homeId]);
// }
// };


const Favourite = require('./favourite');
const { getDb } = require('../util/database-util');

module.exports = class Home {
  constructor(houseName,price,location,rating,photoUrl,description){
    this.houseName = houseName;
this.price = price;
this.location = location;
this.rating = rating;
this.photoUrl = photoUrl;
this.description = description;
  }
  save(){
const db =  getDb();
return db.collection("homes").insertOne(this).then(result => {
  console.log(result);
});
}
 static fetchAll(){
const db = getDb();
return db.collection("homes").find().toArray()
.then(resgisteredHomes => {
  console.log(resgisteredHomes);
  return resgisteredHomes;
})
.catch(error => {
  console.log('Error came while fetching Homes',error);
});
 }

static findById(homeId){

}
static deleteById(homeId){

}
};


