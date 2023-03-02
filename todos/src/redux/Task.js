import React from 'react';

function Task(props) {
  const { id, description, isDone, handleToggle, handleDelete, handleEdit } = props;

  return(
    <div>
      <input type="checkbox" checked={isDone} onChange={() => handleToggle(id)} />
      <span>{description}</span>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <button onClick={() => handleEdit(id)}>Edit</button>
    </div>
  );
  }
export default Task;