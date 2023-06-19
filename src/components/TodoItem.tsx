import React from "react";
import { deleteTodo, toggleTodo } from "./api";
import { Todo } from "./constant";

interface TodoItemPropTypes extends Todo {
  handleChange: () => void;
}

const TodoItem = ({id,status,title, handleChange}: TodoItemPropTypes) => {
  // const {id,status,title} = Item;

  const handleToggle = () => {
    toggleTodo(id, status).then(() => handleChange());
  };

  const handleDelete = () => {
    deleteTodo(id).then(() => handleChange())
  };

  return (
    <div>
      <h3>Title: {title} {`-->`} {status ? "Completed" : "Pending"}</h3>
      <button onClick={() => handleToggle()}>Toggle</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
};

export default TodoItem;
