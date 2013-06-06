
var fs = require('fs');
var querystring = require('querystring');

module.exports = function (file,data){
	var _self = this;
	var cfg = _self.cfg;
	var realpath = cfg.root+file;
	var fsrsoption = {'encoding': 'utf8' };
	var _content = '';
	var mender = _self.mender;

if(arguments.length === 1){
	fs.createReadStream(realpath).pipe(_self.res);
}else{

	var fsrs = fs.createReadStream(realpath,fsrsoption)
		fsrs.tmpldata = data;

	fsrs.on('data',function(data){
		_content +=data;
	});

	fsrs.on('end',function(err){
		var data = this.tmpldata;
		if(typeof data === 'object'){
			var data = querystring.stringify(data);
			_content = _content.replace(/{{tmpldata}}/gim,data);
		}else if(typeof data === 'string'){
			_content = _content.replace(/{{tmpldata}}/gim,data);
		}else{
			console.log(err);
		}
		_content = decodeURI(_content);
		_self.res.end(_content);
	});
}

}