import { React, useState } from 'react';
import shortid from 'shortid';

const TodoForm = (props) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the input text is not empty
    if (text.trim() !== '') {
      props.onSubmit({
        id: shortid.generate(),
        text: text,
        complete: false,
      });
      // delete text after submit
      setText('');
    } else {
      alert('This field should not be empty!');
    }
  };
  return (
    <form
      className="flex w-full duration-200 ease-linear bg-white h-14 mb-7"
      onSubmit={handleSubmit}
    >
      <input
        className="duration-200 ease-linear w-full h-full px-4 input-field focus:outline-none dark:bg-[#150050]"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className=" duration-200 ease-linear w-24 h-full transition-all border-l border-gray-300 hover:bg-slate-100 dark:bg-[#3F0071] dark:border-[#3F0071] dark:text-white"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
