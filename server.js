    // Dependencies //
const express = require('express');
const app = express();
const cors = require('cors');
const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

    // Variables //
let db,
    dbString = process.env.dbString,
    dbName = 'todo-list',
    collection

mongoClient.connect(dbString)
    .then(client => {
        console.log(`Cats: All your base are belong to us. You are on the way to destruction.`)
        db = client.db(dbName)
        collection = db.collection(`Tasks`)
    })



     // Middleware //
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

    // PORT = 8000 //
app.listen(process.env.PORT || PORT, () => {
    console.log(`Captain: It's you on port ${process.env.PORT}!`)
})