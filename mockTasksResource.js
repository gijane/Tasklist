
// callback is a function that is of the format 
// 		function(result, error) {
// 		}
//

module.exports = {

	var tasks = [
		{
			id: 1,
			taskname: 'Task1',
			description: 'The first task',
		},
		{
			id: 2,
			taskname: 'Task2',
			description: 'The second task',
		},
		{
			id: 3,
			taskname: 'Task3',
			description: 'The third task',
		}
	];

	getTasks: function(callback) {

		callback(tasks, null);

	},

	getSingleTask: function(id, callback) {

		if(id < tasks.length) {
			callback(tasks[id], null);
		} else {
			callback(null, { message: 'There is no task with that index in the mock' });
		}
		
	},

	createTask: function(task, callback) {

	},

	updateTask: function(task, callback) {

	},

	deleteTask: function(id, callback) {

	}
};
