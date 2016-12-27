'use strict';

var seedData = require('./seeds.json');
var EventChain = require('../public/js/eventchain.js');

require('./connect.js').then(function(Mongo){

	EventChain([
		function(args, next){
			Mongo.collection('questions', next);
		},
		function(args, next){
			var questions = args[1];
			questions.drop({}, next);
		},
		function(args, next){
			Mongo.collection('questions', next);
		},
		function(args, next){
			var questions = args[1];
			questions.insertMany(seedData.questions, {}, next);
		},
		function(args, next){
			process.exit();
		}
	]);

});
