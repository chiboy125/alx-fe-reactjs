// src/components/TodoList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders no todos message when list is empty", () => {
    render(<TodoList todos={[]} />);
    expect(screen.getByText(/no todos available/i)).toBeInTheDocument();
  });

  test("renders todos when provided", () => {
    const todos = ["Learn React", "Write Tests"];
    render(<TodoList todos={todos} />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });
});
