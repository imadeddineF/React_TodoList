import "./App.css";
import { React, useState } from "react";
import TodoForm from "./components/todoFrom";
import Todo from "./components/Todo";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

    const check = <FontAwesomeIcon icon={faCheck} size="2xl" />;

    return (
        <>
            {/* background image */}
            <div className="h-[350px] w-full absolute top-0 left-0 -z-20">
                <img
                    className="w-full h-full"
                    src={require("./images/two.jpg")}
                    alt="whyyy"
                />
            </div>

            {/* The main todolist */}
            <div className="container w-3/6 mt-[100px] m-auto">
                {/* todolist title */}
                <div className="flex items-center justify-between mb-12">
                    <h1 className="text-6xl font-bold tracking-[20px] text-white">
                        TODO
                    </h1>
                    <span className="text-white">{check}</span>
                </div>

                {/* the submit form */}
                <TodoForm onSubmit={addTodo} />

                {/* todos & buttons controlers */}
                <div className="w-full border shadow-md">
                    {/* The todos space */}
                    <div>
                        {todos.map((todo) => (
                            <Todo
                                key={todo.id}
                                todo={todo}
                                onDelete={() => handleDelete(todo.id)}
                                toggleComplete={() => toggleComplete(todo.id)}
                            />
                        ))}
                    </div>

                    {/* Add controle buttons */}
                    <div className="flex h-16 text-sm font-semibold bg-white justify-evenly">
                        {/* Add All button for show all the todos */}
                        <button
                            className="transition-all hover:text-blue-600"
                            onClick={() => updateTodoShow("all")}
                        >
                            All
                        </button>

                        {/* Add Active button for show only the uncompleted buttons */}
                        <button
                            className="transition-all hover:text-blue-600"
                            onClick={() => updateTodoShow("active")}
                        >
                            Active
                        </button>

                        {/* Add Complete button for show only the completed buttons */}
                        <button
                            className="transition-all hover:text-blue-600"
                            onClick={() => updateTodoShow("complete")}
                        >
                            Completed
                        </button>

                        {/* Add Complete All button for make all the todos completed  */}
                        {todos.some((todo) => todo.complete) ? (
                            <button
                                className="transition-all hover:text-blue-600"
                                onClick={removeAllCompletedTodos}
                            >
                                Clear completed
                            </button>
                        ) : (
                            <button
                                className="opacity-60"
                                onClick={removeAllCompletedTodos}
                            >
                                Clear completed
                            </button>
                        )}

                        {/* Add clear all button for make all the todos completed */}
                        {todos.some((todo) => todo) ? (
                            <button
                                className="transition-all hover:text-blue-600"
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
                        ) : (
                            <button
                                className="opacity-60"
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
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
