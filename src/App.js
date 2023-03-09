import "./App.css";
import { React, useState, useEffect } from "react";
import TodoForm from "./components/todoFrom";
import Todo from "./components/Todo";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  let [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  // Add the tasks to the Local Storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [todoShow, setTodoShow] = useState("all");
  const [toggleAllComplete, setToggleAllComplete] = useState(true);

  // Add tasks
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

  // Make all the tasks copmleted
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

  // Remove all th completed tasks
  const removeAllCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };

  const check = <FontAwesomeIcon icon={faCheck} size="2xl" />;

  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  // Dark mode :
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
  const [darkToggle, setDarkToggle] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkToggle("dark");
    } else {
      setDarkToggle("light");
    }
  }, []);
  useEffect(() => {
    if (darkToggle === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkToggle]);
  const handleThemeSwitcher = () => {
    setDarkToggle(darkToggle === "dark" ? "light" : "dark");
  };
  // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

  return (
    <>
      {/* Dark mode button  */}
      <button
        className="bg-slate-800 text-white rounded-full absolute w-16 h-16 top-8 right-8 hover:opacity-75"
        onClick={handleThemeSwitcher}
      >
        X
      </button>

      {/* background image */}
      <div className="h-[350px] w-full absolute top-0 left-0 -z-20 dark:h-screen dark:bg-[#110522]">
        {darkToggle === "dark" ? null : (
          <img
            className="w-full h-full"
            src={require("./images/bg.jpg")}
            alt="bg"
          />
        )}
      </div>

      {/* The main todolist */}
      <div className="w-5/6 sm:w-4/6 md:w-3/6 lg:w-3/6 mt-[100px] m-auto dark:text-white">
        {/* todolist title */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-[20px] text-white">
            TODO
          </h1>
          <span className="text-white">{check}</span>
        </div>

        {/* the submit form */}
        <TodoForm onSubmit={addTodo} />

        {/* todos & buttons controlers */}
        <div className="max-w-full border shadow-md">
          {/* The todos space */}
          <div>
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={() => handleDelete(todo.id)}
                toggleComplete={() => toggleComplete(todo.id)}
                // addLocalStorage={handleLocalStorage}
              />
            ))}
          </div>

          {/* Add controle buttons */}
          <div className="flex h-16 text-xs sm:text-sm font-semibold bg-white justify-evenly dark:bg-[#150050]">
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
              <button className="opacity-60" onClick={removeAllCompletedTodos}>
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
