const path = require('path');
const express = require('express');
const hostRouter = express.Router();
const rootDir = require('../util/path-util')

hostRouter.get("/add-home", (req,res,next) => {
res.render("add-home",{pageTitle:'Host Your Home'})
});
hostRouter.post("/add-home", (req,res,next) => {
console.log(req.body);
res.render("Home-added", {pageTitle:'Home Hosted'});
});
module.exports = hostRouter;