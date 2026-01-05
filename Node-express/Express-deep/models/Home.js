// const airbnbDb = require("../util/database-util");

// module.exports = class Home {
//   constructor(houseName,price,location,rating,photoUrll,description){
//     this.houseName = houseName;
//     this.price = price;
//     this.location = location;
//     this.rating = rating;
//     this.photoUrll = photoUrll;
//     this.description = description;
//   }
// save (){
//  return airbnbDb.execute(`INSERT INTO homes (houseName,price,location,rating,photoUrll,description) VALUES('${this.houseName}',${this.price},'${this.location}',${this.rating},'${this.photoUrll}','${this.description}')`);
// // return airbnbDb.execute(`INSERT INTO homes (houseName,price,location,rating,photourll,description) VALUES(?,?,?,?,?,?)`,[this.houseName,this.price,this.location,this.rating,this.photoUrll,this.description]);
// }  
// static fetchAll() {
//   return airbnbDb.execute("SELECT * FROM homes");
// }

// static findById(homeId){
// return airbnbDb.execute("SELECT * FROM homes WHERE id=?",[homeId]);
// }
// };






