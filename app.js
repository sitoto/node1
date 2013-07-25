
var app = require("./system/modules/clover.js");
var handle = require('./app/control/handle.js');

app.get('/',handle.index);
app.get('/result',handle.result);
app.get('/search',handle.search);

app.listen(app.cfg.port, app.cfg.host);