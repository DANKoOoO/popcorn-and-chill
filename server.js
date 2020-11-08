var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');


app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));






var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})