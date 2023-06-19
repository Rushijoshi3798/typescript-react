import React, { useEffect, useState } from "react";
import { getTodo } from "./api";
import { Todo } from "./constant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  // OR
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [change, setChange] = useState<boolean>(false);

  // To add new Todo to UI
  const addNewTodo = (newTodo : Todo) => {
    setTodos([...todos, newTodo])
  }

  // To make the get request after toggle / delete
  const handleChange = () => {
    setChange(prev => !prev)
  }

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res);
      // console.log(res);
    });
  }, [change]);

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addNewTodo={addNewTodo}/>
      {todos.length > 0 && todos.map((el) => (
         <TodoItem key={el.id} {...el} handleChange={handleChange} />
      ))}
    </div>
  );
};

export default TodoApp;

