var express = require("express");
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});

console.log("Listening on port 3333");

app.listen(3333);
