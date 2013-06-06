
function parsecookie (app){
	var cookies = {};
	app.req.headers.cookie && app.req.headers.cookie.split(';').forEach(function(cookie) {
		var parts = cookie.split('=');
		cookies[parts[0].trim()] = (parts[1] || '').trim();
	});
	return cookies;
}

module.exports = parsecookie;