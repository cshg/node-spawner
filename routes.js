var data = require('./data.json');
var dockerController = require('./dockerController');

module.exports = function(app, Docker) {

  app.get('/', function(req, res) {
    res.render('index', data);
  });

  app.post('/api/docker', dockerController.createInstance);
}
