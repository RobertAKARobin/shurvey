'use strict';

(function(){

	EventChain([
		Question.getBatch,
		function(args, next){
			console.log('All questions loaded')
		}
	])

})();
