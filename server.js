'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });



app.use(express.static('public'));
app.use('/', (req, res, next) => { console.log(new Date(), req.method, req.url); next(); });

//array that will store food objects
let foodInFridge = [

]

//reminder time variables
let reminderTime = 2;

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


//Handles input food requests
app.post('/inputFood', urlencodedParser, function(req, res) {
  let request = req.body;
  //console.log(request);
  foodInFridge.unshift(request);
  res.redirect('/InsertFood.html');
});


//Handles requests made on the /SetReminder path, updates reminder time
app.post('/SetReminder', urlencodedParser, function (req,res) {
  let request = req.body.days;
  reminderTime = request;
  console.log('reminder time: ' + reminderTime);
  res.redirect('/SetReminder.html');
});


//Handles remove food requests, deletes the specified item from foodInFridge.
app.post('/deleteFood', urlencodedParser, function(req, res) {
  let removeIndex = foodInFridge.map(function(item) { return item.name; }).indexOf(req.body.name);
  foodInFridge.splice(removeIndex, 1);
  res.redirect('/DeleteFood.html')
})



//start the server
app.listen(8080, (err) => {
  if (err) console.error('error starting server', err);
  else console.log('server started');
});






///Server functions

function sortFood(type) {
  if (type == 'quantity') {
    let copyList = foodInFridge;
    copyList.sort(function(a,b) {return b.quantity - a.quantity});
    return copyList;
  }
  else if (type == 'alphabetical') {
    let copyList = foodInFridge;
    copyList.sort(function(a,b) {return a.name - b.name});
    return copyList;
  } else {
   return foodInFridge;
  }
}
