//REQUIRE DEPENDENCIES
const express = require ('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

//SET UP DATABASE VARIABES
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'pair-code',
    collection;

MongoClient.connect(dbConnectionString)
    .then( client => {
        console.log(`connnected to ${dbName}`)
        db = client.db(dbName)
        collection = db.collection('pair-code')
    })

//SETS UP THE PORT, VARIABLES FOR SETTING MIDDLEWARE
app.set('view engine', 'ejs') //sets up the view engine to render ejs -> html
app.use(express.json()) // lets express parse the json data
app.use(express.static('public')) //client side files
app.use(express.urlencoded({extended:true})) // parses the url that are being back and forth between the server
app.use(express(cors())) //allows app use between database and local

app.listen(process.env.PORT || PORT, () => {
    console.log('That THANG is thangin.')
})



