import React, { useState } from 'react';
import './App.css';

function TodoTask({ item, onClick }) {
  return (
    <div  class='todoCard'>
      <p class='title'>{item.name}</p>
      <button onClick={() => onClick(item)}>Delete</button>
    </div>
  )
}

function TodoList ({data}) {
  // Stores the todos in an array
  const[todoListValue, setTodoListValue] = useState([])

  // Increments task IDs as tasks are added to the list
  const[todoIDCount, setTodoIDCount] = useState(0)

  // Stores the text input
  const[inputTextValue, setInputTextValue] = useState('')

  // Transfer the text in the input field into a new task and give it a unique ID.
  const handleTodoListAdd = () => {
    setTodoListValue([...todoListValue, {id: todoIDCount, name: inputTextValue}])
    setTodoIDCount(todoIDCount + 1)
  }

  // Remove a task from the todo list using a filter on the unique task ID
  const handleTodoListRemove = (item) => {
    setTodoListValue(todoListValue.filter(task => task.id !== item.id))
  }
  
  return (
    <div class='container'>
      <h1 class='header'>Todo List</h1>
      <div class='dropdown'> { // Use state to record the text typed into the input field.
        }
        <input type="text" value={inputTextValue} onChange={(e) => setInputTextValue(e.target.value)}/>
        <button onClick={() => handleTodoListAdd()}>Add Task</button>
      </div>
      <div>
        {// Use map to iterate over our array of todo items
        }
        <ul style={{ listStyleType: "none" }}>{todoListValue.map((item) => (
          <li>
            {// Create a TodoTask component for each task recorded in the todoList state
            }
            <TodoTask item={item} onClick={handleTodoListRemove}/>
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
