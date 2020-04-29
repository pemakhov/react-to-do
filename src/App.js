import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type="text" />
      <button>Add</button>
      <button>Clear</button>
    </>
  );
}

export default App;
