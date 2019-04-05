'use strict';

const DEBUG = true;
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//create aplication/json parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.use(express.static('public'));
//logging
app.use('/', (req, res, next) => { console.log(new Date(), req.method, req.url); next(); });

//array that will store food objects
let foodInFridge = []

//Variable to store the number of days before food expires that a reminder is sent.
let reminderTime = 2;

// All sort-request handlers, sort a 'copList', of the original foodInFridge array so
// that the original is a record of the most recently stored items.

// Sort foodInFridge by quantity(descending)
app.get('/indexQuantity', function(req,res) {
  let copyList = foodInFridge;
  copyList.sort(function(a,b) {return b.quantity - a.quantity});
  res.send(copyList);
});

//Sort foodInFridge alphabetically
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

//foodInFridge stored in most recent order, so no sorting is required.
app.get('/indexRecent', function(req,res) {
  let copyList3 = foodInFridge;
  copyList3.sort(function(a, b){
    if(a.expiry < b.expiry) { return -1; }
    if(a.expiry > b.expiry) { return 1; }
    return 0;
  });
  res.send(copyList3);
});


// Handles input food requests
// Uses unshift method to add new elements to the beginning of the array.
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
