import React from 'react';

const Task = ({ task, onComplete, onEdit, onDelete }) => {
  const handleComplete = () => {
    if (window.confirm(`Is the task "${task.name}" completed?`)) {
      onComplete(task.id);
    }
  };

  const handleEdit = () => {
    onEdit(task.id);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete the task "${task.name}"?`)) {
      onDelete(task.id);
    }
  };

  return (
    <li className="flex justify-between items-center p-2 border-b cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
      <span onClick={handleComplete} className="flex-1">
        {task.name}
      </span>
      <div className="flex gap-2">
        <button
          onClick={handleEdit}
          className="bg-yellow-500 text-white rounded px-2 py-1"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white rounded px-2 py-1"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
