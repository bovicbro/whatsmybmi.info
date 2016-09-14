var express = require('express');
var app = express();
var path = require("path");
var http = require('http');

app.use(express.static(path.join(__dirname, './public')));

app.get('/hej', function (req, res) {
  res.send('Hejsan!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
