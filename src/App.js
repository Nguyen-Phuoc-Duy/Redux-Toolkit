//7
// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, toggleTask, deleteTask, editTask } from './features/taskSlice';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask addTask={(text) => dispatch(addTask(text))} />
      <TaskList
        tasks={tasks}
        toggleTask={(id) => dispatch(toggleTask(id))}
        deleteTask={(id) => dispatch(deleteTask(id))}
        editTask={(id, newText) => dispatch(editTask({ taskId: id, newText }))}
      />
    </div>
  );
};

export default App;
