// set up ========================
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({ 'extended': 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


// routes ======================================================================

// api ---------------------------------------------------------------------
// get all movies
app.get('/api/movies', function(req, res) {

  var movies = [{ "movieName": "Toy Story" , "imagePath":"images/toystory.jpg" },
    { "movieName": "Harry Potter" , "imagePath":"images/harrypotter.jpg"},
    { "movieName": "Begin Again"  , "imagePath":"images/beginagain.jpg"},
    { "movieName": "Ruby Sparks"  , "imagePath":"images/rubysparks.jpg"},
    { "movieName": "Stranger Things"  , "imagePath":"images/strangerthings.jpg"},
    { "movieName": "Teen Wolf"  , "imagePath":"images/teenwolf.jpg"},
    { "movieName": "Once Upon A Time"  , "imagePath":"images/ouat.jpg"},
    { "movieName": "New Girl"  , "imagePath":"images/newgirl.jpg"},
  ]

  res.json(movies); // return all movies in JSON format
});


// application -------------------------------------------------------------
app.get('*', function(req, res) {
  res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");
