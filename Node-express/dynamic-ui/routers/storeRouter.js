
const express = require('express');

const storeRouter = express.Router();



storeRouter.get("/",(req,res,next) => {
  console.log(registeredHomes);
  res.render('index', {homes:registeredHomes, pageTitle: 'My airbnb'});
});

module.exports = storeRouter;