const Favourite = require('../models/favourite');
const  Home  = require('./../models/Home');
exports.getIndex=(req,res,next) => {
Home.fetchAll().then(registeredHomes =>{
    res.render('store/index', 
        {homes:registeredHomes,
     pageTitle: 'My airbnb',
    });
});
};
exports.getHomes=(req,res,next) => {
Home.fetchAll().then(registeredHomes =>{
    res.render('store/homes', {homes:registeredHomes, pageTitle: 'Home'});

});

};
exports.getFavourites = (req,res,next) => {
    Favourite.fetchAll().then(favouriteIds =>{
Home.fetchAll().then(registeredHomes =>{
    favouriteIds = favouriteIds.map(favId => favId.homeId);
    console.log(favouriteIds,registeredHomes);
    const favouriteHomes = registeredHomes.filter(home => favouriteIds.includes(home._id.toString())
);
    res.render('store/favourites',{homes:favouriteHomes,pageTitle:'favourites'})
    })

});
};
exports.postAddFavourites = (req,res,next) => {
  const homeId = req.body.id;
const fav = new Favourite(homeId);
fav.save().then(() => {
    res.redirect("/favourites");
}).catch(error => {
    console.log('Error while adding to favourites',error);
   res.redirect("/favourites");
})
};
  
exports.postRemoveFavourites = (req,res,next) => {
    const homeId = req.params.homeId;
    Favourite.deleteById(homeId).then(() => {
   res.redirect("/favourites")
    }).catch((error) => {
        console.log('Error while rwmove from favourites',error);
    });
   };
exports.getHomeDetails = (req,res,next) => {
const homeId = req.params.homeId;
Home.findById(homeId).then(home=> {

    if(!home){
        console.log("Home not found");
        return res.redirect("/homes");
    }
    res.render("store/home-detail", {home:home,pageTitle:"Home Details"});
});



};