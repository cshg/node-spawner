var express = require('express');
var Docker = require('dockerode');

var port = process.env.PORT || 3000;

var app = express();
app.set('view engine', 'pug');

require('./routes')(app);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});