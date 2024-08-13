const mongoose = require('mongoose'); // import mongoose for moongodb interaction
const express = require('express'); //import express for creating the server and handling routes


// Connect to mongodb using Mongoose
mongoose.connect('mongodb+srv://DB_USER:CIzQJz1a1t5LmZkk@cluster0.2andh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Could not connect to MongoDB:', error));

const cors = require('cors'); // import cors middleware to allow cross origin requests

const presentations_router = require('./routers/presentations'); // import the presentations router

const server = express();//Create an Express server

server.use(cors());

server.use(express.json());

server.use('/presentations', presentations_router);

// start the server and make it listen on port 3000
server.listen(3000, () => {
    console.log(`presentation platform is running on localhost:3000`)
})

