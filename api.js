var mock = require('./mockTasksResource');

module.exports = {

  getTasks: function(req, res){
    mock.getTasks(function(result, error){
      res.send(result);
  });
  },

  getSingleTask: function(req, res){
    mock.getSingleTask(req.params.id, function(result, error){
        if(error != null)
        {
          res.status(400);
          res.send(error);

        }
        else {
          res.send(result);
        }
    })

  },

  createTask: function(req, res){
    res.send("createTask");
  },

  updateTask: function(req, res){
    res.send(req.params.id);
  },

  deleteTask: function(req, res) {
    res.send(req.params.id);
  }

};
