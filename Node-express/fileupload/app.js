const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Local modules
const {hostRouter} = require('./routers/hostRouter'); // ✅ corrected import
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorcontroller');
const { authRouter } = require('./routers/authRouter');
const app = express();
const session = require('express-session');
const Mongodb_session= require('connect-mongodb-session');
const multer = require('multer');
const MongoDBStore =Mongodb_session(session);
const MONGO_DB_URL = "mongodb+srv://shardakumari96115_db_user:Add%40123456@airbnb.s8zku2p.mongodb.net/airbnb?appName=Airbnb";
const sessionStore = new MongoDBStore({
  uri:MONGO_DB_URL,
  collection:'sessions',
});

// Handle session store errors
sessionStore.on('error', function(error) {
  console.error('Session store error:', error);
});
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
const upload = multer({dest:"uploads/"});
app.post("/upload",upload.single('photo'),(req,res) => {
  res.send('File uploaded');
});
app.use(bodyParser.json());
app.use(session(
  {
    secret:'MERN LIVE BATCH',
    resave:false,
    saveUninitialized:false, // Only save session if something is stored
    store:sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      httpOnly: true,
      secure: false // Set to true if using HTTPS
    }
  }
));
// Middleware to set isLoggedIn and user for all views
app.use((req, res, next) => {
  res.locals.isLoggedIn = req.session.isLoggedIn || false;
  res.locals.user = req.session.user || null;
  console.log('Middleware - Session ID:', req.sessionID);
  console.log('Middleware - isLoggedIn:', res.locals.isLoggedIn, 'user:', res.locals.user ? 'exists' : 'null');
  console.log('Middleware - req.session:', JSON.stringify(req.session));
  next();
});
app.use('/', storeRouter);
app.use("/host",(req,res,next) => {
  if(!req.session.isLoggedIn){
    return res.redirect("/login");
  }
  next();
})
app.use('/host', hostRouter);
app.use(authRouter);

app.use(errorController.get404);

// MongoDB connection
const PORT = 3019;
mongoose.connect(MONGO_DB_URL)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });




