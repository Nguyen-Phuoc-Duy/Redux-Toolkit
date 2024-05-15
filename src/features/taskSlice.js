//1
// src/features/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.taskId);
      if (task) {
        task.text = action.payload.newText;
      }
    }
  }
});

export const { addTask, toggleTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
