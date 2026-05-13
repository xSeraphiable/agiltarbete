import type { TodoType } from "../types/todo";
import {  useState } from "react";

const ShowTodo = () => {

const [todos, showTodos] = useState<TodoType[]>(() => {
  const storedTodos = localStorage.getItem("todos");

  if (storedTodos) {
    return JSON.parse(storedTodos) as TodoType[];
  }

  return [];
});

const deleteTodo = (id: number) => {
        localStorage.setItem('todos', JSON.stringify(todos.filter((t) => t.id !== id)));
        showTodos(todos.filter((t) => t.id !== id));
};

const updatedTodo = (id: number, completed: boolean) => {
    const updatedTodos = todos.map((t) => t.id === id ? { ...t, completed } : t);
    showTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
}



return (<>
    <div className="todo-container">
            <h2>Todos</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.message}</span>
                        <span>{todo.date}</span>
                        <input type="checkbox" checked={todo.completed} onChange={(e) => {
                            updatedTodo(todo.id, e.target.checked);
                        }} />
                        <button onClick={() => deleteTodo(todo.id)}>
                            Ta bort
                        </button>
                    </li>
                ))}
            </ul>
        </div>
</>)
};

export default ShowTodo;