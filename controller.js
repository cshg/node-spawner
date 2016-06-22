var data = require('./data.json');

module.exports = {
  serveIndex: function(req, res) {
    res.render('index', data);
  },
  createDocker: function(req, res) {
    console.log('create docker instance post request received');
    res.redirect('/');
  }
}