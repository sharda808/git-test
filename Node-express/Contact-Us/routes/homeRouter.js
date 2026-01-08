const express = require('express');
const rootDir = require('../utils/pathUtil');
const path = require('path');
 const homeRouter = express.Router();
 homeRouter.get("/",(req,res,next) => {
 res.sendFile(path.join(rootDir,'views', 'home.html'));
});
module.exports  = homeRouter;