//4
// src/components/Task.js
import React, { useState } from 'react';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewText(task.text);
    setIsEditing(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
      {isEditing ? (
        <span>
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </span>
      ) : (
        <span>
          {task.text}
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </span>
      )}
    </div>
  );
};

export default Task;
