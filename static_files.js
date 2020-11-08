var express = require('express');
var app = express();

app.use(express.static('C:/Windows/WinSxS/amd64_microsoft-windows-r..ent-content-neutral_31bf3856ad364e35_10.0.18362.207_none_4e81a39e380b9ba1/'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})