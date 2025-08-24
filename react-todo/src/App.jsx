// src/App.jsx
import React from "react";
import TodoList from "./components/TodoList"; // ✅ Import TodoList

function App() {
  return (
    <div>
      <h1>My Todo App</h1>
      <TodoList /> {/* ✅ Render TodoList */}
    </div>
  );
}

export default App;
