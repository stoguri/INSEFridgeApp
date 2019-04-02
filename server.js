'use strict';

const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/', (req, res, next) => { console.log(new Date(), req.method, req.url); next(); });


let foodInFridge = [
  {
    name: "apple",
    quantity: "1",
    expiry: "05/05/19"
  },
  {
    name:"milk",
    quantity: "5",
    expiry: "10/04/2019"
  }
]

// handles requests made on the /index path.
//Sorts the items in the array of food objects, foodInFridge.
app.get('/index/sort/:sortType', function (req, res) {
  try {
    let sortedlist = sortFood(req.params.sortType);
    res.send(sortedlist);
  } catch(e) {
    console.error();
  }

});


//start the server
app.listen(8080, (err) => {
  if (err) console.error('error starting server', err);
  else console.log('server started');
});






///Server functions

function sortFood(type) {
  if (type == 'quantity') {
    console.log(type);
    let copyList = foodInFridge;
    copyList.sort(function(a,b) {return b.quantity - a.quantity});
    console.log(copyList)
    return copyList;
  }
  else if (type == 'alphabetical') {
    let copyList = foodInFridge;
    copyList.sort(function(a,b) {return a.name - b.name});
    console.log(copyList)
    return copyList;
  } else {
    console.log(foodInFridge)
    return foodInFridge;
  }
}
