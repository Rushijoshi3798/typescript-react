import React, { useState } from "react";
import { addTodo } from "./api";
import { Todo } from "./constant";

type TodoInputPropType = {
  addNewTodo: (newTodo : Todo) => void // void --> nothing
  // addNewTodo: (a : Todo) => void (THIS IS ALSO FINE)
}

const TodoInput = ({ addNewTodo } : TodoInputPropType) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(title).then((res: Todo) => {
      addNewTodo(res);
    })
    setTitle("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={handleChange} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;