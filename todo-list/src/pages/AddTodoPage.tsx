import type { TodoType } from "../types/todo";
import { useState } from "react";
import "./AppTodo.css";

const AddTodo = () => {
  const [message, setMessage] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <>
      <div className="add-todo">
        <h1>Add Todo</h1>
        <input
          type="text"
          placeholder="Buy banana..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          onClick={() => {
            const newTodo: TodoType = {
              id: Date.now(),
              message,
              completed,
              date,
            };

            let storedTodos: TodoType[] = localStorage.getItem("todos")
              ? JSON.parse(localStorage.getItem("todos")!)
              : [];
            storedTodos.push(newTodo);

            localStorage.setItem("todos", JSON.stringify(storedTodos));
            location.reload();
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;

function useEffect(arg0: () => void, arg1: TodoType[][]) {
  throw new Error("Function not implemented.");
}
