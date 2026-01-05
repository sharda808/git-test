const Favourite = require('../models/favourite');
const  Home  = require('./../models/Home');
exports.getIndex=(req,res,next) => {
Home.fetchAll().then(([registeredHomes]) =>{
    res.render('store/index', 
        {homes:registeredHomes,
     pageTitle: 'My airbnb',
    });
});
};
exports.getHomes=(req,res,next) => {
Home.fetchAll().then(([registeredHomes]) =>{
    res.render('store/homes', {homes:registeredHomes, pageTitle: 'Home'});

});

};
exports.getFavourites = (req,res,next) => {
    Favourite.fetchAll((favouriteIds) =>{
Home.fetchAll().then(([registeredHomes]) =>{
    const favouriteHomes = registeredHomes.filter(home => favouriteIds.includes(home.id));
    res.render('store/favourites',{homes:favouriteHomes,pageTitle:'favourites'})
    })

});
};
exports.postAddFavourites = (req,res,next) => {
  const homeId = req.body.id;

    Favourite.addToFavourite(homeId, error=>{
        if(error){
            console.log("Error while adding to favourite",error);
        }
    res.redirect("/favourites");
    })
};
exports.postRemoveFavourites = (req,res,next) => {
    const homeId = req.params.homeId;
    Favourite.deleteById(homeId, error => {
        if(error){
        console.log('Error while remove from favourites ',error);
    }
    res.redirect("/favourites")
})
}
exports.getHomeDetails = (req,res,next) => {
const homeId = req.params.homeId;
Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if(!home){
        console.log("Home not found");
        return res.redirect("/homes");
    }
    res.render("store/home-detail", {home:home,pageTitle:"Home Details"});
});



};