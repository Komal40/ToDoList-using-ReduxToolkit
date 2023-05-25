
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const { taskId, status } = action.payload;
      const task = state.tasks.find((task) => task.id === taskId);
      if (task) {
        task.status = status;
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
