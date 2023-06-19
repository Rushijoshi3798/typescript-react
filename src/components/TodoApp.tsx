import React, { useEffect, useState } from "react";
import { getTodo } from "./api";
import { Todo } from "./constant";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  // OR
  // const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodo : Todo) => {
    setTodos([...todos, newTodo])
  }

  const toggleTodoItem = (toggleTodo: Todo) => {

    let newArr: Todo[] = [];
    for(let i=0; i<todos.length; i++){
      if(todos[i].id === toggleTodo.id){
        todos[i].status = !todos[i].status;
      }
      newArr.push(todos[i]);
    }
    setTodos(newArr)
  }

  const deleteTodoItem = (id: number) => {
   let newArr: Todo[] = todos.filter((el) => {
      return el.id !== id
    })
    setTodos(newArr)
  }

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res);
      // console.log(res);
    });
  }, []);

  return (
    <div>
      <h1>Todo map</h1>
      <TodoInput addNewTodo={addNewTodo}/>
      {todos.length > 0 && todos.map((el) => (
         <TodoItem key={el.id} {...el} toggleTodoItem={toggleTodoItem} deleteTodoItem={deleteTodoItem} />
      ))}
    </div>
  );
};

export default TodoApp;