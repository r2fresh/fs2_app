(function(){
	window.FS2 = window.FS2 || {};

})();

(function(FS2){
	FS2.util = {};

	Object.assign(FS2.util,{

		parseHash : function(){
			var hash;

			if(!location.hash.length){
				return null;
			}

			hash = location.hash.split('/');

			hash[0] = hash[0].replace('#','');

			return hash;
		}
	})

})(FS2);
