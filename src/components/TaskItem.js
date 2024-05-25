import React from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const handleToggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggleComplete}
      />
      {task.completed ? <del>{task.name}</del> : <span>{task.name}</span>}
      <button onClick={() => deleteTask(task.id)}>Excluir</button>
    </div>
  );
};

export default TaskItem;