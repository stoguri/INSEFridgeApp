'use strict';

const express = require('express');
const mysql = require ('mysql');
const app = express();
const PORT = 8080;

let foodInFridge = [
  {
    name: "apple",
    quantity: 5,
    expiry: "05/05/19"
  },
]



app.use(express.static(__dirname + '/'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + 'hello');
});

// handles requests made on the /index path.
//Sorts the items in the array of food objects, foodInFridge.
app.get('/index', function (req, res) {
    let sortType = req.query.sort;
    if (sortType = "mostRecent") {
      res.send(foodInFridge);
    }
    else if (sortType = "Alphabetical") {
      foodInFridge.sort(function(a,b) {return a.name - b.name});
      res.send(foodInFridge);
    } else {
      foodInFridge.sort(function(a,b) {return a.expiry - b.expiry});
      res.send(foodInFridge);
    }
});


app.get()

//start the server
app.listen(8080, (err) =>{
    if(err) console.log('error starting the server', err);
    else console.log('dashboard started on port 8080');
})
