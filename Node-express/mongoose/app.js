const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Local modules
const {hostRouter} = require('./routers/hostRouter'); // ✅ corrected import
const storeRouter = require('./routers/storeRouter');
const rootDir = require('./util/path-util');
const errorController = require('./controllers/errorcontroller');

const app = express();

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve static files
app.use(express.static(path.join(rootDir, "public")));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mount routers
// Store routes handle "/", "/homes", "/favourites", etc.
app.use('/', storeRouter);
app.use('/host', hostRouter);

// 404 handler
app.use(errorController.get404);

// MongoDB connection
const PORT = 3016;
const MONGO_DB_URL = "mongodb+srv://shardakumari96115_db_user:Add%40123456@airbnb.s8zku2p.mongodb.net/airbnb?appName=Airbnb";

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




