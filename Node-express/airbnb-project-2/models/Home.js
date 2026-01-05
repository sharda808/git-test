 const fs = require('fs');
 const path = require('path');
const rootDir = require('./../util/path-util');
const { error } = require('console');
 const registeredHomes = [];
module.exports = class Home {
  constructor(houseName,price,location,rating,photo,photoUrl){
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photo = photo;
    this.photoUrl = photoUrl;
  }
  save(){
registeredHomes.push(this);
const homeFilepath = path.join(rootDir,'data','homes.json');
fs.writeFile(homeFilepath,JSON.stringify(registeredHomes),
error => {
  if(error){
    console.log('Error while writing data',error);
  }
}
)
  }
  static fetchAll(){
    return registeredHomes;
  }
}



















