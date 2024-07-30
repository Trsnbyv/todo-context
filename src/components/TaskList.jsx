import { useState } from 'react';
import { useTasks } from '../components/Context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return true;
  }).filter((task) => task.text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <div className="filters">
        <button onClick={() => setFilter('all')}>All ({tasks.length})</button>
        <button onClick={() => setFilter('completed')}>
          Completed ({tasks.filter(task => task.completed).length})
        </button>
        <button onClick={() => setFilter('uncompleted')}>
          Uncompleted ({tasks.filter(task => !task.completed).length})
        </button>
      </div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

