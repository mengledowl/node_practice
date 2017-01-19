var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views'));

app.set('view engine', 'ejs');

app.use('/', function(req, res, next) {
  console.log('Request Url: ' + req.url);
  next();
});

htmlController(app);

apiController(app);

app.listen(port);