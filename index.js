var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.get('/', function(req, res){
  res.send('hello world hello');
});

app.get('/message/:hello', function(req, res){
  res.send(req.params.hello);
});

app.post('/', function(req, res){
  res.send(req.body.taskname + " " + req.body.description);
});

app.listen(3000);
