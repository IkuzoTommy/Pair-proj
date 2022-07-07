const express = require ('express');
const app = express();
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

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

app.listen(process.env.PORT || PORT, () => {
    console.log('That THANG is thangin.')
})



