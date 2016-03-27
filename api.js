module.exports = {

  getTasks: function(req, res){
    res.send("Hello world");
  },

  getSingleTask: function(req, res){
    res.send(req.params.id);
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
