const express = require("express");
const connectMongoDB = require("./database/mongodb");
const app = express();
const home = require("./routes/home")
const albums = require("./routes/albums");
const auth = require('./routes/auth')
const errorHandler = require("./middleware/errorHandler");
const config = require('./utils/config')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const passport = require('passport')
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(session({
    secret: config.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoDBStore({
        uri: config.MONGODB_URI,
        collection: 'passport-sessions',
    }),
}));
app.use(passport.authenticate('session'));
app.use(home);
app.use("/api/albums", albums);
app.use("/auth", auth);

app.use(errorHandler);

const start = async () => {
    try {
        await connectMongoDB(config.MONGODB_URI);
        app.listen(config.PORT, () => {
            console.log(`server is listening on port ${config.PORT}...`);
        });
    } catch (error) {
        console.error(error);
    }
};

start();
