'use strict';

function EventChain(events){
	var index = -1;
	next();

	function next(){
		index += 1;
		var event = events[index];
		if(event){
			event(arguments, next);
		}
	}
}

if(typeof module !== 'undefined'){
	module.exports = EventChain;
}
