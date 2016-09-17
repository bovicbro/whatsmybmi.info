var express = require('express');
var app = express();
var path = require("path");
var http = require('http');

var port = 80;

if (process.argv[2]=='-dev') {
 port=3000
}

app.use(express.static(path.join(__dirname, './public')));

app.get('/hej', function (req, res) {
  res.send('Hejsan!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
