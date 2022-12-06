import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  return (
    <section className="max-w-lg mx-auto ">
      {props.data.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo.todo}
          id={todo.id}
          onremoveTodo={props.onremoveTodo}
        />
      ))}
    </section>
  );
};

export default Todos;
