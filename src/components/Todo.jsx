import React from "react";
import { BiTrash } from "react-icons/bi";

const Todo = (props) => {
  const { title, desc } = props.todo;
  const { id } = props;
  const handleClick = (id) => {
    props.onremoveTodo(id);
  };
  return (
    <div className="mb-4 bg-gray-600 p-2 rounded-xl">
      <div className="flex items-center p-1 justify-end gap-2 ">
        <span>
          <BiTrash
            onClick={() => {
              handleClick(id);
            }}
            className="cursor-pointer hover:text-red-500 text-red-400 text-2xl sm:text-3xl"
          />
        </span>
      </div>
      <div className="pl-2 pb-2">
        <h3 className="text-xl sm:text-2xl text-gray-100 pb-3">{title}</h3>
        <p className="text-base sm:text-lg text-gray-400">{desc}</p>
      </div>
    </div>
  );
};

export default Todo;
