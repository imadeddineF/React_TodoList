import "./App.css";
import { React, useState } from "react";
import TodoForm from "./components/todoFrom";
import Todo from "./components/Todo";

export default function App() {
    let [todos, setTodos] = useState([]);
    const [todoShow, setTodoShow] = useState("all");
    const [toggleAllComplete, setToggleAllComplete] = useState(true);
    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    };
    // Delete a tasks
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodoShow = (e) => {
        setTodoShow(e);
    };
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                } else {
                    return todo;
                }
            })
        );
    };
    if (todoShow === "active") {
        todos = todos.filter((todo) => !todo.complete);
    } else if (todoShow === "complete") {
        todos = todos.filter((todo) => todo.complete);
    }
    const removeAllCompletedTodos = () => {
        setTodos(todos.filter((todo) => !todo.complete));
    };
    return (
        <div className="container">
            <TodoForm onSubmit={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onDelete={() => handleDelete(todo.id)}
                    toggleComplete={() => toggleComplete(todo.id)}
                />
            ))}
            <div className="flex m-auto mt-10 justify-evenly">
                <button
                    className="px-4 py-1 transition-all border rounded-lg hover:bg-gray-100"
                    onClick={() => updateTodoShow("all")}
                >
                    All
                </button>
                <button
                    className="px-4 py-1 transition-all border rounded-lg hover:bg-gray-100"
                    onClick={() => updateTodoShow("active")}
                >
                    Active
                </button>
                <button
                    className="px-4 py-1 transition-all border rounded-lg hover:bg-gray-100"
                    onClick={() => updateTodoShow("complete")}
                >
                    Complete
                </button>
            </div>
            <div className="flex mt-5 justify-evenly">
                {todos.some((todo) => todo.complete) ? (
                    <button
                        className="py-1 border px-7"
                        onClick={removeAllCompletedTodos}
                    >
                        Clear all completed ones
                    </button>
                ) : null}
                <button
                    className="py-1 border px-7"
                    onClick={() => {
                        setTodos(
                            todos.map((todo) => ({
                                ...todo,
                                complete: toggleAllComplete,
                            }))
                        );
                        setToggleAllComplete(!toggleAllComplete);
                    }}
                >
                    Complete all
                </button>
            </div>
        </div>
    );
}
