
// callback is a function that is of the format
// 		function(result, error) {
// 		}


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

module.exports = {

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

		if(!task.taskname))
			callback(null, { message: 'Taskname is missing' });
		
		if(!task.description))
			callback(null, { message: 'Description is missing' });

		callback(task, null);

	},

	updateTask: function(task, callback) {

		if(!task.taskname))
			callback(null, { message: 'Taskname is missing' });
		
		if(!task.description))
			callback(null, { message: 'Description is missing' });

		callback(task, null);

	},

	deleteTask: function(id, callback) {

		if(id < tasks.length) {
			callback(tasks[id], null);
		} else {
			callback(null, { message: 'There is no task with that index in the mock' });
		}

	}
};
