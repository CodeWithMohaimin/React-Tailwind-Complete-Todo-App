import React from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HomeTodo = () => {
  const [todo, setTodo] = useState([]);

  const handleAddTodo = (todo) => {
    setTodo((prev) => {
      return [...prev, { id: uuidv4(), todo }];
    });
  };

  const handleRemoveTodo = (id) => {
    const filterTodo = todo.filter((todo) => todo.id !== id);
    setTodo(filterTodo);
  };

  return (
    <div className="bg-gray-800 min-h-screen pt-10 px-4">
      <NewTodo onAddTodo={handleAddTodo} />
      <Todos data={todo} onremoveTodo={handleRemoveTodo} />
    </div>
  );
};

export default HomeTodo;
