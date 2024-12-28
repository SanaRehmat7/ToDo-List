import React, { useState } from "react";

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [category, setCategory] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task || !category || !dueDate) {
      alert("Please fill in all fields!");
      return;
    }
    const newTask = {
      id: Date.now(),
      task,
      category,
      dueDate,
      completed: false,
    };
    addTask(newTask);
    setTask("");
    setCategory("");
    setDueDate("");
  };

  return (
    <div className="page-container">
      <h1 className="text-3xl font-bold mb-6 text-center pt-3">Add a New Task</h1>
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md flex flex-col gap-4 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Task Name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="border text-gray-800 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border text-gray-800 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border text-gray-800 border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskInput;


// import React from 'react'
// import { useState } from 'react';
// const TaskInput = ({ addTask }) => {
//     const [task, setTask] = useState("");
//     const [category, setCategory] = useState("");
//     const [dueDate, setDueDate] = useState("");
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if (!task || !category || !dueDate) {
//         alert("Please fill in all fields!");
//         return;
//       }
//       addTask({ id: Date.now(), task, category, dueDate, completed: false });
//       setTask("");
//       setCategory("");
//       setDueDate("");
//     };
  
//     return (
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-4 rounded shadow-md flex flex-col gap-4 max-w-md mx-auto"
//       >
//         <input
//           type="text"
//           placeholder="Task Name"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//           type="date"
//           value={dueDate}
//           onChange={(e) => setDueDate(e.target.value)}
//           className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//         >
//           Add Task
//         </button>
//       </form>
//     );
//   };
  
//   export default TaskInput;
  