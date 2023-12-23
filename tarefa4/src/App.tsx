import React from 'react';
import { TodoForm } from './components/TodoForm'
import './App.css';
import { TodoProvider } from './contexts/todoContext';
import CompletedTasks from './components/CompletedTasks';
import PendingTasks from './components/PendingTasks';

function App() {
  return (
    <TodoProvider>
      <TodoForm />
      <PendingTasks />
      <CompletedTasks />
    </TodoProvider>
  );
}

export default App;