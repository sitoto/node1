
function index (app){
	app.tmpl('/theme/mm/template/index.html');
	app.session.get(app,function(session){
		console.log(session)
		//!session && app.session.set(app,session.sid);
		//!!session && app.session.remove(app,session.sid);
	});
}


module.exports = {
	index : index
}







/*


function index (app){
	app.session.get(app,function(session){

		!!session?
			function(){
				app.tmpl('/theme/mm/template/index.html',session);
		}():
			function(){
				app.tmpl('/theme/mm/template/index.html');
		}();
	});

}

function login (app){
	app.db(app.cfg.dbhost+'.user').find(app.postdata,function(r){
		(!!r && r.documents.length === 1)?
			function(){
				app.session.get(app,function(state){
					!state?
						function(){
						app.session.set(app);
						app.tmpl('/theme/mm/template/index.html',r.documents[0]);
					}():
						function(){
						app.tmpl('/theme/mm/template/index.html',{msg:'已登录'});
					}();
						
				});
		}():
			function(){
				app.tmpl('/theme/mm/template/index.html',{msg:'用户名不存在或用户名密码错误'});
		}();
	});
}

function regtmpl(app){
	app.tmpl('/theme/mm/template/reg.html');
}

function register(app){
	var uid = {
		uid : app.postdata.uid
	}
	app.db(app.cfg.dbhost+'.user').find(uid,function(r){
		console.log(uid);
		(r.documents.length === 0)?
			function(){
			app.db(app.cfg.dbhost+'.user').insert(app);
			//app.tmpl('/theme/mm/template/index.html',{msg:'恭喜，'+app.uname+'，注册成功'});
		}():
			function(){
			app.tmpl('/theme/mm/template/index.html',{msg:'用户名已注册'});
		}();
	});
}


function clovers(app){
	app.tmpl('/theme/33clover/index.html');
}
function car(app){
	app.tmpl('/theme/car/index.html');
}

module.exports = {
	index : index,
	clovers : clovers,
	car : car,
	login : login,
	regtmpl : regtmpl,
	register : register
}

	*/