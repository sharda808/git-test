
const Favourite = require('./favourite');
const airbnbDb = require("../util/database-util");

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
// return airbnbDb.execute(`INSERT INTO new_table (houseName,price,location,rating,photoUrl,description) VALUES ('${this.houseName}',${this.price},'${this.location}',${this.rating},'${this.photoUrl}','${this.description}')`);
if(this.id){//update
return airbnbDb.execute('UPDATE new_table SET houseName = ?,price=?,location=?,rating =?,photoUrl =?,description=? WHERE id=?',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.description, this.id]);
}else{//insert
return airbnbDb.execute('INSERT INTO new_table (houseName,price,location,rating,photoUrl,description) VALUES(?,?,?,?,?,?)',[this.houseName,this.price,this.location,this.rating,this.photoUrl,this.description]);
}

}
 static fetchAll(){
 return airbnbDb.execute("SELECT * FROM new_table")

}
static findById(homeId){
return airbnbDb.execute("SELECT * FROM new_table WHERE id=?", [homeId]);
}
static deleteById(homeId){
return airbnbDb.execute("DELETE FROM new_table WHERE id=?", [homeId]);
}
};




