import React, { useState } from 'react';

function AddTask(props) {
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (description.trim()) {
      const newTask = {
        id: Date.now(),
        description,
        isDone: false
      };
      props.handleAdd(newTask);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
