import React from "react";
import Todos from "./Todos";

const HomeTodo = () => {
  const dummyTodos = [
    {
      id: 1,
      title: "This is a dummy title",
      desc: "This is a dummy description for description",
    },
    {
      id: 2,
      title: "This is a dummy title",
      desc: "This is a dummy description for description",
    },
  ];
  return (
    <div className="bg-gray-800 min-h-screen pt-10">
      <Todos data={dummyTodos} />
    </div>
  );
};

export default HomeTodo;
