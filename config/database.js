const mongoose = require('mongoose');
const dbHOST = process.env.DBHOST;

mongoose.connect(dbHOST)
    .then(() => {
        console.log('MongoDB Connnected successfully')
    }).catch((err) => {
        console.log('Error while Mongo Conn..', err);
    })