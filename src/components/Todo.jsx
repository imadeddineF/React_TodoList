import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
    const trashOne = <FontAwesomeIcon icon={faTrash} />;
    const trashTwo = <FontAwesomeIcon icon={faTrashRestoreAlt} />;

    return (
        <div className="flex justify-between h-12 max-w-md px-3 py-1 m-auto mt-2 text-gray-900 bg-gray-300 border rounded-xl">
            <div
                onClick={props.toggleComplete}
                className="flex items-center my-auto cursor-pointer focus:line-through"
            >
                <input
                    id=""
                    type="checkbox"
                    value=""
                    class="accent-violet-500 w-5 h-5 mr-3"
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
                className="flex items-center p-4 text-base tracking-wide text-red-500 transition-all border-gray-300 rounded-full cursor-pointer btn-delete bg-none hover:bg-red-100"
            >
                <span class="mdi-delete transition-all">{trashOne}</span>
                <span class="mdi-delete-empty hidden transition-all">
                    {trashTwo}
                </span>
            </button>
        </div>
    );
};

export default Todo;
