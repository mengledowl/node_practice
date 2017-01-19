var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 3000;

var people = [
  {
    name: 'John Doe'
  },
  {
    name: 'Jane Doe'
  },
  {
    name: 'Jim Doe'
  }
]

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, '/views'));

app.get('/', function (req, res) {
  res.render('index', { serverPeople: people });
});

app.listen(port);