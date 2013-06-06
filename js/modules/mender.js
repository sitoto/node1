
module.exports = {

	merge : function(){
		var l= arguments.length;
		var out= arguments[--l],
			inp= arguments[l-1];

		for(var i in out){
			inp[i]= out[i];
		}

		if(l-1==0){
			return inp;
		}

		var ar= [],
			_slice= ar.slice;
		var n= _slice.call(arguments,0,l);

		inp= merge.apply(null,n);
		return inp;
	}

}