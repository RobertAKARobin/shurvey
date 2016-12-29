'use strict';

var AJAX = (function(){
	return {
		getJSON: getJSON
	}

	function handleResponse(response){
		var callback = this;
		var request = response.target;
		if(
			request.readyState == 4 &&
			request.status >= 200 &&
			request.status < 400
		){
			try{
				callback(JSON.parse(request.responseText));
			}catch(JSONParseError){
				callback(request.responseText);
			}
		}
	}

	function getJSON(url, callback){
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.setRequestHeader('Content-Type', 'application/json');
		request.onreadystatechange = handleResponse.bind(callback);
		request.send();
		return request;
	}
})();
