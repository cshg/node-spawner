var express = require('express');
var Docker = require('dockerode');

var port = process.env.PORT || 3000;

var app = express();

app.get('/', function(req, res) {
  res.send('Node Spawner: GET request received');
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});