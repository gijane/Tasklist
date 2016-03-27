module.exports = {
  getTasks: function(req, res){
    res.send("Hello world");
  },

  getSingleTask: function(req, res){
    res.send(req.params.id);
  }


};
