const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const tweetRoutes = require('./routes/tweets');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/healthflex").then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
});

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/tweets', tweetRoutes);

app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});