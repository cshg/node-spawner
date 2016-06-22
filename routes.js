var data = require('./data.json');
var controller = require('./controller');

module.exports = function(app) {
  app.get('/', controller.serveIndex);
  app.post('/api/docker', controller.createDocker);
}
