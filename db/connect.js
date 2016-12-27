'use strict';

var url = process.env.MONGO_URL || 'mongodb://localhost:27017/shurvey';

console.log('Connecting to MongoDB at ' + url + '...');

var promise = require('mongodb').MongoClient.connect(url);

promise.then(function(Mongo){
	console.log('Connected to Mongo database "' + Mongo.databaseName + '"');
});

promise.catch(function(err){
	console.log('Fatal ' + err.name + ': ' + err.message);
	process.exit();
});

module.exports = promise;
