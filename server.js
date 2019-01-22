var express = require('express');

config = require('./server/configure');

var app = express(),
	mongoose = require('mongoose');
app.set('port', process.env.PORT || 3300);
app.set('views', __dirname + '/views');
mongoose.connect('mongodb://localhost/imgShare');
mongoose.connection.on('open', function(){
	console.log('mongoose connected !');
})
app = config(app);
var server = app.listen(app.get('port'), function(){
	console.log('Server up : http://localhost:' + app.get('port'));
})