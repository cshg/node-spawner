var Docker = require('dockerode');
var docker = new Docker({socketPath: '/var/run/docker.sock'});

module.exports = {
  createInstance: function(req, res) {
    console.log('create docker instance post request received');
    res.redirect('/');
  }
}