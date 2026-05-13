//import {  useState } from "react";
import type { TodoType } from "../types/todo";
//import './todo.css';
import { useState } from "react";

const AddTodo = () => {
const [message, setMessage] = useState<string>('');
const [date, setDate] = useState<string>('');
const [completed, setCompleted] = useState<boolean>(false);
const [todos, setTodos] = useState<TodoType[]>([]);

    return (<>
    <div>
        <h1>Add Todo</h1>
        <input type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <label>
            Completed:
            <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
        </label>
        <button onClick={() => {
            const newTodo: TodoType = {
                id: Date.now(),
                message,
                completed,
                date
            };

            setTodos([...todos, newTodo]);
            setMessage('');
            setDate('');
            setCompleted(false);
            localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));

        }}>Add Todo</button>
    </div>

</>)

};

export default AddTodo;