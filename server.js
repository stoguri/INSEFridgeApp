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

app.post('/inputFood', urlencodedParser, function(req, res) {
  let request = req.body;
  //console.log(request);
  foodInFridge.unshift(request);
  res.redirect('/InsertFood.html');
});

app.post('/SetReminder', urlencodedParser, function (req,res) {
  let request = req.body.days;
  reminderTime = request;
  console.log('reminder time: ' + reminderTime);
  res.redirect('/SetReminder.html');
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
