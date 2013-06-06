
var crypto = require('crypto');
var db = require("../node_modules/mongous").Mongous;

var option = {

	config : {
		collection : 'mm.session',
		secret : 'vtejuf33clover',
		expires : 'Wed, 13-Jan-2021 22:23:01 GMT',
		httponly : 'HttpOnly'
	},

	makeSID : function(){
		var md5 = crypto.createHash('md5');
		md5.update(Date.now()+option.config.secret);
		return md5.digest('hex');
	},

	update : function(session_id,content){
		db(option.config.collection).update({sid : session_id},content,true,false);
	},

	remove : function(session_id){
		db(option.config.collection).remove({sid : session_id});
	},
	
	check : function(session_id,callback){
		db(option.config.collection).find({sid : session_id},function(r){
			var _content = r.documents;
			if(_content.length !== 1){
				callback(false);
				return false;
			}
			callback(_content[0]);
		});
	}

}

function get(app,callback){
	var cookies = app.parsecookie(app);
	var session_id = cookies.hasOwnProperty('session')? cookies.session: '';
	if(session_id === ''){
		callback(false);
	}else{
		option.check(session_id,function(sid){
			!sid?
			function (){
				callback(false);
			}():
			callback(sid);
		});
	}
}


function set(app,data){
	var session_id = data && data.sid || null;
	!!session_id?
	function(){
		option.update(session_id,data);
	}():
	function(){
		session_id = option.makeSID();
		app.res.setHeader('Set-Cookie',['session=' + session_id + ';expires=' + option.config.expires + ';' + option.config.httponly]);

		/**/
		!!data?
		function(){
			data = app.mender.merge({sid : session_id},data);
			option.update(session_id,data);
		}():
		function(){
			db(option.config.collection).insert({sid : session_id});
		}();
		
	}();
}

function remove(app,session_id){
	option.remove(session_id);
}


config = option.config;

module.exports = {
	set : set,
	get : get,
	remove : remove,
	config : config
}