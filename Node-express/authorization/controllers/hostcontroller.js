const Home = require('../models/Home');
exports.getAddHome = (req,res,next) => {
res.render("host/edit-home",
  { editing:false,
    pageTitle:'Host Your Home',
    isLoggedIn:req.session.isLoggedIn,
       user:req.session.user,
  })
};
exports.getEditHome = (req,res,next) => {
  const homeId = req.params.homeId;
  const editing = req.query.editing === 'true';
  if(!editing){
    console.log("Editing flag not set  properly");
      return res.redirect("/host/host-homes");
  }
  Home.findById(homeId).then(home => {

      if(!home){
      console.log("Home  not found for editing");
      return res.redirect("/host/host-homes");
    }

  console.log(homeId,editing,home);
res.render("host/edit-home",{ 
  home:home, 
  editing:editing,
  pageTitle:'Edit Your Home',
isLoggedIn:req.session.isLoggedIn,
   user:req.session.user,
})
  })
};
exports.postAddHome =(req,res,next) => {
const {houseName,price,location,rating,photoUrl,description} = req.body;
  const newHome = new Home({
    houseName,
    price,
    location, 
    rating,
    photoUrl,
    description,
    host:req.session.user._id,
});
newHome.save().then(() => {
res.redirect("/host/host-homes")
});
}
exports.postEditHome = (req, res, next) => {
 
  const { id, houseName, price, location, rating, photoUrl,description } = req.body;
Home.findById(id)
.then(existingHome => {
if(!existingHome){
  console.log('Home not found  for editing');
  return res.redirect('/host/host-homes');
}
existingHome.houseName = houseName;
existingHome.price = price;
existingHome.location = location;
existingHome.rating = rating;
existingHome.photoUrl = photoUrl;
existingHome.description = description;
return existingHome.save();
})
.catch(err => {
  console.log(err);
   return res.redirect('/host/host-homes');
})
};
exports.getHostHomes = (req,res,next) => {
  Home.find({host:req.session.user._id}).then(registeredHomes =>{
    res.render("host/host-homes",
       {homes:registeredHomes,
         pageTitle: 'Host Homes',
         isLoggedIn:req.session.isLoggedIn,
            user:req.session.user,
        });

});
}

exports.postDeleteHome = (req,res,next) =>{
  const homeId = req.params.homeId;
  Home.findByIdAndDelete(homeId).then(() => {
    res.redirect("/host/host-homes");
  })
}

exports.getAnalytics = async (req,res,next) => {
  try {
    const userId = req.session.user._id;
    const homes = await Home.find({host:userId});
    
    // Calculate analytics
    const totalHomes = homes.length;
    const totalRevenue = homes.reduce((sum, home) => sum + (home.price || 0), 0);
    const averagePrice = totalHomes > 0 ? totalRevenue / totalHomes : 0;
    const averageRating = totalHomes > 0 
      ? homes.reduce((sum, home) => sum + (home.rating || 0), 0) / totalHomes 
      : 0;
    
    // Group by location
    const locationStats = {};
    homes.forEach(home => {
      if (home.location) {
        locationStats[home.location] = (locationStats[home.location] || 0) + 1;
      }
    });

    res.render("host/analytics", {
      pageTitle: 'Analytics Dashboard',
      isLoggedIn: req.session.isLoggedIn,
      user: req.session.user,
      analytics: {
        totalHomes,
        totalRevenue,
        averagePrice: averagePrice.toFixed(2),
        averageRating: averageRating.toFixed(2),
        locationStats,
        homes: homes
      }
    });
  } catch(err) {
    console.log('Error loading analytics:', err);
    res.redirect("/host/host-homes");
  }
}

