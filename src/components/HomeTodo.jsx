import React from "react";
import NewTodo from "./NewTodo";
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
    <div className="bg-gray-800 min-h-screen pt-10 px-4">
      <NewTodo />
      <Todos data={dummyTodos} />
    </div>
  );
};

export default HomeTodo;
