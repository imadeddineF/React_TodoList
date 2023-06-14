import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Todo = (props) => {
  const xMark = <FontAwesomeIcon icon={faXmark} size="lg" />;
  return (
    <div className="duration-200 ease-linear flex hover:bg-gray-100 transition-all justify-between pl-5 text-gray-900 bg-white border-b h-[70px] dark:text-white dark:bg-[#610094]">
      <div
        onClick={props.toggleComplete}
        className="flex items-center max-w-full my-auto overflow-hidden duration-200 ease-linear cursor-pointer focus:line-through"
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
          className="ml-4 overflow-hidden text-lg text-ellipsis"
          style={{
            textDecoration: props.todo.complete ? 'line-through' : '',
          }}
        >
          {props.todo.text}
        </p>
      </div>
      <button
        onClick={props.onDelete}
        className="px-4 ml-3 py-3 my-auto mr-2 text-base text-gray-500  rounded-full cursor-pointer w-fit h-fit bg-none hover:bg-gray-200 duration-200 ease-linear dark:hover:bg-[#3F0071] dark:text-white"
      >
        {xMark}
      </button>
    </div>
  );
};

export default Todo;
