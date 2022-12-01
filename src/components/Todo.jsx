import React from "react";
import { BiTrash } from "react-icons/bi";

const Todo = (props) => {
  const { title, id, desc } = props.todo;
  return (
    <div className="mb-4 bg-gray-600 p-2 rounded-xl">
      <div className="flex items-center p-1 justify-end gap-2 ">
        <small className="text-sm sm:text-base text-gray-300">
          Todo - {id}
        </small>
        <span>
          <BiTrash className="cursor-pointer hover:text-red-500 text-red-400 text-2xl sm:text-3xl" />
        </span>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl text-gray-100 pb-3">{title}</h3>
        <p className="text-base sm:text-lg text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default Todo;
