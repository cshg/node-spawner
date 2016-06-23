var fs = require('fs');
var Docker = require('dockerode');

var docker = new Docker({socketPath: '/var/run/docker.sock'});
var docker1 = new Docker({
  host: '45.55.183.145',
  port: 2376,
  ca: fs.readFileSync('../certificates/do1/ca.pem'),
  cert: fs.readFileSync('../certificates/do1/cert.pem'),
  key: fs.readFileSync('../certificates/do1/key.pem')
});

module.exports = {
  createInstance: function(req, res) {
    docker1.createContainer({Image: 'node-sender', name: 'sender-app4'}, function (err, container) {
      container.start(function (err, data) {
        if (err) {
          console.log('error while starting new container', err);
        } else {
          console.log('container started with the following id: ', container.id);
        }
      });
    });

    res.redirect('/');
  },

  checkContainer: function(req, res) {
    console.log('check container called');

    // create a container entity. does not query API
    var container = docker1.getContainer('f3bc3c37f713');

    // query API for container info
    container.inspect(function (err, data) {
      console.log(data);
    });

    res.redirect('/');
  }
}