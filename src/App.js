import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Martin's To-do List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
