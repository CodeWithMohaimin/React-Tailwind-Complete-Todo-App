import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section className="max-w-lg text-gray-300 mx-auto ">
      {props.data.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

export default Todos;
