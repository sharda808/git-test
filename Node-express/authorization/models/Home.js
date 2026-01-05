
const mongoose = require('mongoose')
const homeSchema = new mongoose.Schema({
  houseName:{type:String,required:true},
price:{type:Number,required:true},
location:{type:String,required:true},
rating:{type:Number,required:true},
photoUrl:{type:String},
description:{type:String},
host:{
  type:mongoose.Schema.Types.ObjectId,
  ref:'User',
}
});

module.exports = mongoose.model("Home",homeSchema);
// module.exports = class Home {
//   constructor(houseName,price,location,rating,photoUrl,description,_id){
   
//     this.houseName = houseName;
// this.price = price;
// this.location = location;
// this.rating = rating;
// this.photoUrl = photoUrl;
// this.description = description;
// if(_id){
//  this._id = new ObjectId(String(_id));
// }
//   }
//  save(){
// const db =  getDb();
// if(this._id){// update
//  return db.collection("homes").updateOne({_id:this._id},{$set:this})
// }
// else {
//   return db.collection("homes").insertOne(this);
// }
//  }
//  static find(){
// const db= getDb();
// return db.collection("homes").find().toArray()
//  }
// static findById(homeId){
//   console.log('Came to fetch',homeId);
// const db = getDb();
// return db.collection('homes').find({_id:  new ObjectId(String(homeId))}).next()
// // .then(home => {
// // console.log(home);
// // return home;
// // })
// .catch(error => {
//   console.log('Error came while doing findById',error)
// })
// }
// static deleteById(homeId){
// const db = getDb();
// return db.collection('homes').deleteOne({_id: new ObjectId
//   (String(homeId))});
// }
// };




