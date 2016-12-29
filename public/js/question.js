'use strict';

var Question = (function(){
	var _Class = Question;
	var _instance = _Class.prototype;

	// Constructor
	function Question(data){
		var instance = this;
		instance.class = Question;
		instance.data = data;
		console.dir(instance)
	}

	_Class.getBatch = function(args, next){
		EventChain([
			function(args, next){
				AJAX.getJSON('/api/questions', next);
			},
			function(args, next){
				var data = args[0];
				for(var i = data.length - 1; i >= 0; i--){
					new Question(data[i]);
				}
				next();
			},
			next
		]);
	}

	return _Class;
})();
