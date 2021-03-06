
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
var cors = require('cors');

//var resource = require('./resources/mockTasksResource');
var resource = require('./resources/postgresTasksResource')(config);

var api = require('./api')(resource);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/tasks', api.getTasks);

app.get('/tasks/:id', api.getSingleTask);

app.post('/tasks', api.createTask);

app.put('/tasks/:id', api.updateTask);

app.delete('/tasks/:id', api.deleteTask);

app.listen(3000);
