import React from "react";

const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="page-container pt-2">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Tasks</h1>
      {tasks.length === 0 ? (
        <p className="text-gray-900 text-center">No tasks available. Add some tasks!</p>
      ) : (
        <ul className="space-y-4 max-w-md mx-auto">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`p-4 text-gray-900 border rounded flex justify-between items-center ${
                task.completed ? "bg-green-100" : "bg-white" 
              }`}
            >
              <div>
                <h3 className="font-bold">{task.task}</h3>
                <p className="text-sm text-gray-900">
                  {task.category} | Due: {task.dueDate}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-black px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
