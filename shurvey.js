'use strict';

var express = require('express');
var app = express();
var API = express.Router();
var DB = require('./db/connect.js');

if(process.env.NODE_ENV == 'development'){
	app.use(express.static('public'));
}

app.use('/api', API);
API.get('/', function(req, res){
	res.json({success: true});
});

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), function(){
	console.log('Running env ' + process.env.NODE_ENV + ' on port ' + app.get('PORT'));
});
