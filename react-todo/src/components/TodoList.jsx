// src/components/TodoList.jsx
import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState(["Learn React", "Build Todo App"]);

  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
