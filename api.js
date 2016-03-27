module.exports = {
  getTasks: function(req, res){
    res.send("Hello world");
  },

  getSingleTask: function(req, res){
    res.send(req.params.id);
  },

  deleteTask: function(req, res) {
	res.send(200);
  }
};
