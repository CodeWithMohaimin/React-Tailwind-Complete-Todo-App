import React from "react";
import { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({ title: "", desc: "" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setTodo((oldTodo) => {
      return {
        ...oldTodo,
        [name]: e.target.value,
      };
    });
  };
  return (
    <form className="text-center text-gray-300  max-w-lg mx-auto mb-4">
      <div className="flex items-center justify-between mb-2 sm:flex-row flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="max-w-sm w-full outline-none p-2 text-gray-500 rounded-md"
          id="title"
          type="text"
          name="title"
          onChange={handleChange}
          value={todo.title}
        />
      </div>

      <div className="flex items-center justify-between sm:flex-row flex-col">
        <label htmlFor="desc">Description</label>
        <textarea
          className="max-w-sm w-full outline-none p-2 text-gray-500 rounded-md"
          name="desc"
          id="desc"
          onChange={handleChange}
          value={todo.desc}
        ></textarea>
      </div>
      <div className="flex justify-start">
        {!todo.title ? (
          ""
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-gray-700 hover:bg-gray-900 py-1 px-10 my-10 ring-1 duration-150"
          >
            Add
          </button>
        )}
      </div>
    </form>
  );
};

export default NewTodo;
