import React, { useState } from 'react';
import './App.css';

function TodoList ({data}) {
  // Stores the todos in an array
  const[todoListValue, setTodoListValue] = useState([])

  // Stores the text input
  const[inputTextValue, setInputTextValue] = useState('')
  
  return (
    <div class='container'>
      <h1 class='header'>Todo List</h1>
      <div class='dropdown'> { // 
        }
        <input type="text" value={inputTextValue} onChange={(e) => setInputTextValue(e.target.value)}/>
        <button onClick={() => setTodoListValue([...todoListValue, inputTextValue])}>Add Task</button>
      </div>
      <div>
        {// Use map to iterate over our array of todo items
        }
        <ul style={{ listStyleType: "none" }}>{todoListValue.map((item) => (
          <li>
            {//
            }
            <div class='todoCard'>
              <p class='title'>{item}</p>
              <button onClick={() => setTodoListValue(todoListValue.filter(item2 => item2 !== item))}>Delete</button>
            </div>
          </li>
          )
        )}</ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <TodoList/>
    </div>
  );
}

export default App;
