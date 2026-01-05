const express = require('express');
const hostRouter = express.Router();
const hostcontroller = require('./../controllers/hostcontroller')
hostRouter.get("/add-home", hostcontroller.getAddHome);  
hostRouter.post("/add-home",hostcontroller.postAddHome );
hostRouter.get("/host-homes",hostcontroller.getHostHomes);
hostRouter.get("/edit-home/:homeId",hostcontroller.getEditHome);
hostRouter.post("/edit-home",hostcontroller.postEditHome);
hostRouter.post("/delete-home/:homeId",hostcontroller.postDeleteHome);
exports.hostRouter = hostRouter;
