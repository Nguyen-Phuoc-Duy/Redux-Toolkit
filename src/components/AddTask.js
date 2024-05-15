//6
// src/components/AddTask.js
import React, { useState } from 'react';

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }
    addTask(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
