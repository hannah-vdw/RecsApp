require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const connectDB = require('./config/dbConnection')

const app = express();
const port = 8080;

connectDB();

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

mongoose.connection.once('open', () => {
    console.log('connected to mongo db')
    
    // start the Express server
    app.listen(port, () => {
        console.log( `server started at http://localhost:${port}` );
    } );
})

