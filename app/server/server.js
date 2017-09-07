require('dotenv').config()
const express = require('express')
    , bodyParser = require('body-parser')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')
    , seesion = require('express-session');


const app = express()

//MIDDLEWARE
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitalized: true
}));
//FIRST STEP TO USING PASSPORT
app.use(passport.initialize());
app.use(passport.session());




//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then
( db => {
    app.set('db', db)
})

//AUTHENTICATION



let PORT = 3005;
app.listen(PORT, () => {
    console.log(`Sup Homie from: ${PORT}`) //('Sup Homie from port: ' + PORT)
})


