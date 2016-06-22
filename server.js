var express = require('express');
var Docker = require('dockerode');

var port = process.env.PORT || 3000;

var content = {
  status: 'Ready to spawn docker instances'
};

var app = express();
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', content);
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});