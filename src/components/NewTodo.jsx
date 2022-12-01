import React from "react";

const NewTodo = () => {
  return (
    <div className="text-center text-gray-300  max-w-lg mx-auto mb-4">
      <div className="flex items-center justify-between mb-2 sm:flex-row flex-col">
        <label htmlFor="title">Title</label>
        <input
          className="max-w-sm w-full outline-none p-2 text-gray-500 "
          id="title"
          type="text"
        />
      </div>

      <div className="flex items-center justify-between sm:flex-row flex-col">
        <label htmlFor="desc">Description</label>
        <textarea
          className="max-w-sm w-full outline-none p-2 text-gray-500"
          name="desc"
          id="desc"
        ></textarea>
      </div>
    </div>
  );
};

export default NewTodo;
