
const Home = require('./../models/Home');
exports.getAddHome = (req, res, next) => {
   res.render('host/add-home',{pageTitle:"Host Your Home"});
};

exports.postAddHome =(req,res,next) => {
  const {houseName,price,location,rating,photoUrll,description} = req.body;
  const newHome = new Home(houseName,price,location, rating,photoUrll,description);
newHome.save().then(([rows]) => {
res.render("host/home-added", {pageTitle:"Home Hosted"});
});
}