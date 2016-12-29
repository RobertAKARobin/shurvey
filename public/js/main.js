'use strict';

(function (){

	AJAX.getJSON('/api/questions', function(){
		console.log(arguments)
	});

})();
