
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
		res.send("createTask");
	  },

	  updateTask: function(req, res){
		res.send(req.params.id);
	  },

	  deleteTask: function(req, res) {
		res.send(req.params.id);
	  }
  };

};
