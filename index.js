var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/tasks', function(req, res){
	res.status(200);
});

app.get('/tasks/:id', function(req, res){
	res.status(200);
});

app.post('/tasks', function(req, res){
	res.status(201);
});

app.put('/tasks/:id', function(req, res){
	res.status(201);
});

app.delete('/tasks/:id', function(req, res){
	res.status(201);
});

app.listen(3000);
