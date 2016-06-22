var path = require('path');
var express = require('express');
var http = require('http');
var serveStatic = require('serve-static');
var config = require('./config');
var winston = require('winston');
var papertrail = require('winston-papertrail').Papertrail;

module.exports = function(options) {
  var Renderer = require("../config/SimpleRenderer.js");

  // load bundle information from stats
  var stats = options.devServer ? require("../build/stats-dev.json") : require("../build/stats.json");

  var publicPath = stats.publicPath;

  var renderer = new Renderer({
    styleUrl: options.separateStylesheet && (publicPath + "todos.css?" + stats.hash),
    scriptUrl: publicPath + [].concat(stats.assetsByChunkName.todos)[0]
  });

  var app = express();

  // serve the static assets
  app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" // We can cache them as they include hashes
  }));
  app.use("/", express.static(path.join(__dirname, "..", "public"), {
  }));

  app.get("/*", function(req, res) {
    renderer.render(
      req.path,
      function(err, html) {
        if(err) {
          res.statusCode = 500;
          res.contentType = "text; charset=utf8";
          res.end(err.message);
          return;
        }
        res.contentType = "text/html; charset=utf8";
        res.end(html);
      }
    );
  });

  //app.use(serveStatic(config.publicPath, {'index': ['index.html']}));

  var server = http.createServer(app);


  winston.add(winston.transports.Papertrail, {
  			host: 'logs4.papertrailapp.com',
  			port: 40894,
        program: 'todomvc-redux-react-typescript'
  //      hostname: 'BMS-Macbook-Pro',
  		}
  );


  server.listen(config.port, function () {
    console.log('listening on http://localhost:' + config.port);
    winston.info('listening on http://localhost:' + config.port);

  });
};
