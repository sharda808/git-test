const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongodb_session = require('connect-mongodb-session');

// Local Module
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorcontroller = require('./controllers/errorcontroller');
const { authRouter } = require('./routers/authRouter');
const MongoDbStore = mongodb_session(session);
const MONGO_DB_URL="mongodb+srv://shardakumari96115_db_user:Add%40123456@airbnb.s8zku2p.mongodb.net/?appName=Airbnb";


const sessionStore = new MongoDbStore({
uri:MONGO_DB_URL,
collection:'session',
})
 const app = express();
 app.set('view engine', 'ejs');
 app.set('views', 'views');
 app.use(express.static(path.join(rootDir,"public")));
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
 secret:'MERN LIVE BATCH',
 resave:false,
saveUninitialized:true,

}))

app.use(storeRouter);
app.use("/host",(req,res,next) => {
  app.use("/host",hostRouter);
if(!req.session.isLoggedIn){
  return res.redirect("/login");
}
next();
})
app.use('/host', hostRouter);

app.use(authRouter);
app.use(errorcontroller.get404);
const PORT = 3011;
app.listen(PORT,() => {
  console.log(`Server running at:http://localhost:${PORT}`);
});

