var http = require('http');
var app = require("./js/modules/clover.js");
var handle = require('./js/modules/handle.js');

app.get('/',handle.index);

http.createServer(app).listen(app.cfg.port, app.cfg.host);