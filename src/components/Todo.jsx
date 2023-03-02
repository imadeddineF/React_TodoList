import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
    const xMark = <FontAwesomeIcon icon={faXmark} size="lg" />;
    return (
        <div className="flex justify-between pl-5 text-gray-900 bg-white border-b h-14">
            <div
                onClick={props.toggleComplete}
                className="flex items-center my-auto cursor-pointer focus:line-through"
            >
                <input
                    id=""
                    type="checkbox"
                    value=""
                    class="accent-violet-500 w-5 h-5 mr-3 cursor-pointer"
                    checked={props.todo.complete ? true : false}
                />
                <p
                    for="checkbox"
                    className="text-lg"
                    style={{
                        textDecoration: props.todo.complete
                            ? "line-through"
                            : "",
                    }}
                >
                    {props.todo.text}
                </p>
            </div>
            <button
                onClick={props.onDelete}
                className="px-4 py-3 my-auto mr-2 text-base text-gray-500 transition-all rounded-full cursor-pointer w-fit h-fit bg-none hover:bg-gray-50"
            >
                {xMark}
            </button>
        </div>
    );
};

export default Todo;
