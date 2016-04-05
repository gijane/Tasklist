var pg = require('pg');

module.exports = function(config) {

	return {
		getTasks: function(callback) {
			pg.connect(config.dbConnection, function(err, client, done){
				if(err) callback(null, err);

				client.query("SELECT * FROM tl.tasks", function(error, result){
					if(error) callback(null, error);

					done();
					callback(result.rows, null);
				});
			})
		},


		getSingleTask: function(id, callback) {
			pg.connect(config.dbConnection, function(err, client, done){
				if(err) callback(null, err);

				client.query("SELECT * FROM tl.tasks WHERE id = $1", [id], function(error, result){
					if(error) callback(null, error);

					done();
					callback(result.rows, null);
				});
			})
		},

		createTask: function(task, callback) {
			pg.connect(config.dbConnection, function(err, client, done){
				if(err) callback(null, err);

				client.query("INSERT INTO tl.tasks (name, description) VALUES ($1, $2) RETURNING id", [task.name, task.description], function(error, result){
					if(error) callback(null, error);

					task.id = result.rows[0].id;
					done();
					callback(task, null)
			})
			})
		},

		updateTask: function(task, callback) {
			pg.connect(config.dbConnection, function(err, client, done){
				if(err) callback(null, err);

				//client.query("UPDATE tl.tasks SET name = $1")
			})
		},

		deleteTask: function(id, callback) {
		}
	};
}
