'use strict';

const express = require('express');
const mysql = require ('mysql');
const app = express();
const PORT = 8080;



app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + 'hello');
});

//start the server
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('dashboard started on port 8080');
})
