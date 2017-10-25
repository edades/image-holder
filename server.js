var port = Number(process.env.PORT || 8080);

var parseurl = require('parseurl');
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Huemul image holder');
});

app.get('/*', function(req, res) {
  var args = parseurl(req).pathname.replace('/', '').split('x');
  var width = args[0];
  var height = args[1];
  var font_size = Math.round(Math.max(12, Math.min(Math.min(args[0], args[1]) * 0.75, 0.75 * Math.max(args[0], args[1]) / 12)))
  res.writeHead(200, {'Content-Type': 'image/svg+xml'});
  res.end('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" preserveAspectRatio="none"><rect width="' + width + '" height="' + height + '" fill="#000"/><image opacity=".4" xlink:href="https://emoji.slack-edge.com/T0R6F3YAX/huemul/8eea7517e45d75e6.png" x="0" y="0" height="'+height+'px" width="'+width+'px"/><text text-anchor="middle" x="' + width/2 + '" y="' + height/2 + '" style="fill:#fff;font-weight:bold;font-size:' + font_size + 'px;font-family:Arial,Helvetica,sans-serif;dominant-baseline:central">' + width + 'x' + height + '</text></svg>');
});

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
