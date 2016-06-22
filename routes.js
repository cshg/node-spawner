var data = require('./data.json');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', data);
  });

  app.post('/api/docker', function(req, res) {
    console.log('post request received');
    res.redirect('/');
  })
}
