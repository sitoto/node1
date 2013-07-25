module.exports = {
	host : '192.168.2.125',
	port : '3000',
	root : '/Sites/idpei/clover-node',
	theme : '/theme/newcar',
	dbhost : '127.0.0.1',
	dbport : '27017',
	dbname : 'cars',
	notfound : '/theme/newcar/404.html',
	sessionCfg : {
		collection : 'cars.session',
		secret : 'vtejuf33clover',
		expires : 'Wed, 13-Jan-2021 22:23:01 GMT',
		httponly : 'HttpOnly'
	}
}

