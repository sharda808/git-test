const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
// Local Module
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorcontroller = require('./controllers/errorcontroller');
const { authRouter } = require('./routers/authRouter');

 const app = express();
 app.set('view engine', 'ejs');
 app.set('views', 'views');
 app.use(express.static(path.join(rootDir,"public")));
app.use(bodyParser.urlencoded({extended:true}));
// app.use((req,res,next) =>{
//   console.log(req.get('Cookie').split('=')[1]==='true');
// req.isLoggedIn = req.get('Cookie').split('=')[1] === 'true';
// next();
// });
app.use(storeRouter);
app.use("/host",(req,res,next) => {
  if(!req.isLoggedIn){
    return res.redirect("/login");
  }
  next();
})
app.use('/host', hostRouter);
app.use(authRouter);
app.use(errorcontroller.get404);
const PORT = 3003;
app.listen(PORT,() => {
  console.log(`Server running at:http://localhost:${PORT}`);
});

