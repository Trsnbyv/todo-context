import React from 'react';
import { useTasks } from '../components/Context/TaskContext';

const TaskItem = ({ task, index }) => {
  const { deleteTask, updateTask } = useTasks();

  return (
    <li className={`${task.completed ? 'completed' : ''} ${task.priority}-priority`}>
      <div className="change-wrapper">
        <span>Name: {task.text}, Date: {task.date}, Priority: {task.priority}</span>
      </div>
      <div className="change-wrapper">
        <button className='p-2 bg-green-500 text-white rounded-lg' onClick={() => {
          const newText = prompt("Update your todo", task.text);
          const newDate = prompt("Update your date", task.date);
          const newPriority = prompt("Update your priority (low, medium, high)", task.priority);
          if (newText && newDate && newPriority) {
            updateTask(index, { ...task, text: newText, date: newDate, priority: newPriority });
          }
        }}>Update</button>
        <button className='p-2 bg-red-500 text-white rounded-lg' onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </li>
  );
};

export default TaskItem;
