import { useState } from 'react';
import { useTasks } from '../components/Context/TaskContext';

const TaskForm = () => {
  const { addTask } = useTasks();
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('low');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() && date) {
      addTask({ text: task.trim(), date, priority, completed: false });
      setTask('');
      setPriority('low');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <label htmlFor="priority">Choose priority</label>
      <select id="priority" value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <label htmlFor="date">Enter the task date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit" id='addBtn'>Submit</button>
    </form>
  );
};

export default TaskForm;
