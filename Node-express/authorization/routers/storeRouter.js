
const express = require('express');
const storecontroller = require('../controllers/storecontroller')
const storeRouter = express.Router();
storeRouter.get("/", storecontroller.getIndex);
storeRouter.get("/homes",storecontroller.getHomes);
storeRouter.get("/homes/:homeId",storecontroller.getHomeDetails);
storeRouter.get("/favourites",storecontroller.getFavourites)
storeRouter.post("/favourites", storecontroller.postAddFavourites)
storeRouter.post("/favourites/delete/:homeId", storecontroller.postRemoveFavourites)
module.exports = storeRouter;