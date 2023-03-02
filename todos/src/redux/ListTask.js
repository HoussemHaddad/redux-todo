import React from 'react';
import Task from './Task';

function ListTask(props) {
  const { tasks, filter, handleToggle, handleDelete, handleEdit } = props;

  const filteredTasks = filter === 'all' ? tasks :
    filter === 'done' ? tasks.filter(task => task.isDone) :
    tasks.filter(task => !task.isDone);

  return (
    <div>
      {filteredTasks.map(task => (
        <Task key={task.id}
          id={task.id}
          description={task.description}
          isDone={task.isDone}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default ListTask;
