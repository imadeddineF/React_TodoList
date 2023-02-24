import { React, useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: shortid.generate(),
            text: text,
            complete: false,
        });
        // delete text after sybmit
        setText("");
    };
    return (
        <form
            className="flex justify-center gap-16 mt-36 mb-7"
            onSubmit={handleSubmit}
        >
            <input
                className="px-4 py-1 border border-black rounded-md input-field w-96 h-11"
                type="text"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                className="px-6 py-1 transition-all border border-black btn rounded-xl hover:bg-gray-100"
                onClick={handleSubmit}
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;
