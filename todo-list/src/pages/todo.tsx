import { useState } from "react";
import type { TodoType } from "../types/todo";

const Todo = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const [text, setText] = useState<string>("");

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: TodoType = {
      id: Date.now(),
      message: text,
      completed: false,
      date: new Date().toString(),
    };

    setTodos([...todos, newTodo]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  return (
    <div className="todo-container">
      <h1>Todo App</h1>

      <div className="input-box">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Skriv en uppgift..."
        />

        <button onClick={addTodo}>Lägg till</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              id="todocheck"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.message}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>Ta bort</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
