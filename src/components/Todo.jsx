import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
  const xMark = <FontAwesomeIcon icon={faXmark} size="lg" />;
  return (
    <div className="flex hover:bg-gray-100 transition-all justify-between pl-5 text-gray-900 bg-white border-b h-14 dark:text-white dark:bg-[#610094]">
      <div
        onClick={props.toggleComplete}
        className="flex items-center my-auto cursor-pointer focus:line-through max-w-full overflow-hidden"
      >
        <input
          id=""
          type="checkbox"
          value=""
          class="accent-violet-500 scale-150 origin-left cursor-pointer"
          checked={props.todo.complete ? true : false}
        />
        <p
          for="checkbox"
          className="text-lg ml-4 text-ellipsis overflow-hidden"
          style={{
            textDecoration: props.todo.complete ? "line-through" : "",
          }}
        >
          {props.todo.text}
        </p>
      </div>
      <button
        onClick={props.onDelete}
        className="px-4 ml-3 py-3 my-auto mr-2 text-base text-gray-500 transition-all rounded-full cursor-pointer w-fit h-fit bg-none hover:bg-gray-200 dark:hover:bg-[#3F0071] dark:text-white"
      >
        {xMark}
      </button>
    </div>
  );
};

export default Todo;
