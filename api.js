
module.exports = function (resource) {

  return {

	  getTasks: function(req, res){
		resource.getTasks(function(result, error){
		  res.send(result);
		});
	  },

	  getSingleTask: function(req, res){
		resource.getSingleTask(req.params.id, function(result, error){
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
      var task = {
        name: req.body.name,
        description: req.body.description
      };
		resource.createTask(task, function(result, error){
      if(error)
      {
        res.status(401);
        res.send(error);
      }
      else{
        res.send(result);
      }
    })
	  },

	  updateTask: function(req, res){
      var task = {
        id: req.param.id,
        name: req.body.taskname,
        description: req.body.description
      };
		resource.updateTask(task, function(result, error){
      if(error)
      {
        res.status(400);
        res.send(error);
      }
      else{
        res.send(result);
      }
    })
	  },

	  deleteTask: function(req, res) {
		resource.deleteTask(req.params.id, function(result, error){
      if(error)
      {
        res.status(400);
        res.send(error);
      }
      else{
        res.send(result);
      }
    })
	  }
  };

};
