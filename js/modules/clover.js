
var url = require('url');
var cfg = require('../../config.js');
var tmpl = require('./tmpl.js');
var router = require('../server/router.js');
var db = require("../node_modules/mongous").Mongous;
var mender = require("./mender.js");
var session = require('./sessions.js');
var parsecookie = require('./cookies.js');
var querystring = require('querystring');

function clover(req,res){
	this.req = req;
	this.res = res;
	this.url = url.parse(req.url);
};
clover.prototype.cfg = cfg;
clover.prototype.tmpl = tmpl;
clover.prototype._get = clover.prototype._get || {};
clover.prototype._post = clover.prototype._post || {};
clover.prototype.session = session;
clover.prototype.mender = mender;
clover.prototype.db = db;
clover.prototype.parsecookie = parsecookie;
clover.prototype.querystring = querystring;

function server(req,res){
	var app = new clover(req,res);
	router(app);
}
server.tmpl = clover.prototype.tmpl;
server.cfg = cfg;

server.get = function(pathname,handle){
	clover.prototype._get[pathname] = handle;
};
server.post = function(pathname,handle){
	clover.prototype._post[pathname] = handle;
};



module.exports = server;
