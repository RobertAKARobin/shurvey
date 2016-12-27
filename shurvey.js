'use strict';

var express = require('express');
var app = express();
var Mongo;

var EventChain = require('./public/js/eventchain.js');

(function Readying(){
	if(process.env.NODE_ENV == 'development'){
		app.use(express.static('public'));
	}
	app.set('PORT', process.env.PORT);
})();

(function Running(){
	require('./db/connect.js').then(function(DB){
		Mongo = DB;
		app.listen(app.get('PORT'), function(){
			console.log('Running env ' + process.env.NODE_ENV + ' on port ' + app.get('PORT'));
		});
	});
})();

(function Routing(){
	var API = express.Router();
	app.use('/api', API);
	API.get('/', function(req, res){
		res.json({success: true});
	});
	API.get('/questions', function(req, res){
		EventChain([
			function(args, next){
				Mongo.collection('questions', next);
			},
			function(args, next){
				var questions = args[1];
				questions.find({}).toArray(next);
			},
			function(args, next){
				var questions = args[1];
				res.json(questions);
			}
		]);
	});
})();
