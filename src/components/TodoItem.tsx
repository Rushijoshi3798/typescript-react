import React from "react";
import { deleteTodo, toggleTodo } from "./api";
import { Todo } from "./constant";

interface TodoItemPropTypes extends Todo {
  toggleTodoItem: (toggleTodo: Todo) => void;
  deleteTodoItem: (id: number) => void;
}

const TodoItem = ({id,status,title, toggleTodoItem, deleteTodoItem}: TodoItemPropTypes) => {
  // const {id,status,title} = Item;
  const handleToggle = (id: number, status: boolean) => {
    toggleTodo(id, status).then((res: Todo) => {
      toggleTodoItem(res)
    });
  };

  const handleDelete = (id: number) => {
    deleteTodo(id).then((res: number) => {
      if(res === 200){
        deleteTodoItem(id);
      }else {
        alert("Something went wrong, Try to Delete Again")
      }
    })
  };

  return (
    <div>
      <h3>Title: {title} {`-->`} {status ? "Completed" : "Pending"}</h3>
      <button onClick={() => handleToggle(id, status)}>Toggle</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default TodoItem;