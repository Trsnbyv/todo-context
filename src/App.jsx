// import './App.css'
// import TodoForm from './components/ToDoForm'
// import TodoList from './components/ToDoList'

// function App() {

//   return (
//     <>
//       <TodoForm/>
//       <TodoList/>
//     </>
//   )
// }

// export default App

import './App.css'
import { TaskProvider } from '../src/components/Context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Enter your task</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TaskProvider>
  );
};

export default App;
