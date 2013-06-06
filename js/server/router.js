
var fs = require('fs');
var statics = require('./static.js');
var posts = require('./posts.js');

function router(app){
	var method = app.req.method;
	var pathname = decodeURI(app.url.pathname);

	if(method === 'GET'){
		if(typeof app._get[pathname] === 'function'){
			app._get[pathname](app);
		}else{
			statics(app);
		}
	}else if(method === 'POST'){
		posts(app);
	}

};

module.exports = router;
