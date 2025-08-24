import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders TodoList with default todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});

test("allows user to add a new todo", () => {
  render(<TodoList />);
  
  const input = screen.getByPlaceholderText("Add a new todo");
  const button = screen.getByText("Add Todo");

  // simulate typing and clicking
  fireEvent.change(input, { target: { value: "New Todo Item" } });
  fireEvent.click(button);

  // check if the new todo appears
  expect(screen.getByText("New Todo Item")).toBeInTheDocument();
});
