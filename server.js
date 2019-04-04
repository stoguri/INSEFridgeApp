'use strict';

const DEBUG = true;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//create application/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });



app.use(express.static('public'));
app.use('/', (req, res, next) => { console.log(new Date(), req.method, req.url); next(); });

//array that will store food objects
let foodInFridge = []


//reminder time variables
let reminderTime = 2;

app.get('/indexQuantity', function(req,res) {
  let copyList = foodInFridge;
  copyList.sort(function(a,b) {return b.quantity - a.quantity});
  res.send(copyList);
});

app.get('/indexAlphabetical', function(req,res) {
  try {
    let copyList2 = foodInFridge;
    copyList2.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    });
    res.send(copyList2);
  } catch(e) {
    console.log(e);
  }

});

app.get('/indexRecent', function(req,res) {
  res.send(foodInFridge);
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

  // for debugging
  if (DEBUG) {
    console.log(type);
  }

  let copyList = foodInFridge;
  if (type == 'quantity') {
    copyList.sort(function(a,b) {return b.quantity - a.quantity});
  } else if (type == 'alphabetical') {
    copyList.sort(function(a,b) {return b.name - a.name});
  } else if (type == 'recent') {
    copyList.sort(function(a,b) {return b.expiry > a.expiry});
  }
  console.log(copyList)
  return copyList;
}
