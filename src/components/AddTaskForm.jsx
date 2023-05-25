// AddTaskForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './todoSlice';

const AddTaskForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') return;
    const newTask = {
      name: name,
      id: Date.now().toString(),
      status: 'pending',
    };
    dispatch(addTask(newTask));
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
