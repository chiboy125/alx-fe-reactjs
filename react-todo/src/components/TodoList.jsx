// src/components/TodoList.jsx
import React from "react";

function TodoList({ todos = [] }) {
  if (todos.length === 0) {
    return <p>No todos available</p>;
  }

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;
