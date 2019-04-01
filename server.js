'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));


let foodInFridge = [
  {
    name: "apple",
    quantity: 5,
    expiry: "05/05/19"
  },
]

// handles requests made on the /index path.
//Sorts the items in the array of food objects, foodInFridge.
app.get('/index/sort/:sortType', function (req, res) {
    let sortType = req.params.sortType ;
    console.log(sortType);
    if (sortType == 'quantity') {
      foodInFridge.sort(function(a,b) {a.quantity - b.quantity});
      res.send(foodInFridge);
    }
});


//start the server
app.listen(8080, (err) => {
  if (err) console.error('error starting server', err);
  else console.log('server started');
});
