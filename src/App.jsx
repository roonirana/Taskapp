import React, { useState } from 'react';
import Task from './components/Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTask, setEditingTask] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const task = {
      id: tasks.length + 1,
      name: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
  };

  const completeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const editTask = (taskId) => {
    const task = tasks.find(task => task.id === taskId);
    setEditingTask(task);
    setNewTask(task.name);
  };

  const updateTask = () => {
    setTasks(tasks.map(task =>
      task.id === editingTask.id ? { ...task, name: newTask } : task
    ));
    setEditingTask(null);
    setNewTask('');
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-gray-100 text-gray-900 min-h-screen"}>
      <div className="flex flex-col items-center p-5 font-extrabold">
        <div className="flex justify-between w-full max-w-md mb-4">
          <h1 className="text-4xl font-extrabold">Todo-List</h1>
          <button
            onClick={toggleTheme}
            className="bg-indigo-500 text-white rounded px-4 py-2"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>

        <div className="mb-4 w-full max-w-md">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter a new task"
            className="border rounded px-3 py-2 w-full text-black"
          />
          <button
            onClick={editingTask ? updateTask : addTask}
            className="mt-2 bg-green-500 text-white rounded px-4 py-2 w-full"
          >
            {editingTask ? 'Update Task' : 'Add Task'}
          </button>
        </div>

        <ul className="list-none w-full max-w-md">
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              onComplete={completeTask}
              onEdit={editTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;


// import React from 'react'
// import Products from './components/Products'

// const App = () => {
//   return (
//     <Products />
//   )
// }

// export default App