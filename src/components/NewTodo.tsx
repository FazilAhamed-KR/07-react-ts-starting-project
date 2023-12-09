import React, { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-contens";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    // if (enteredText.trim().length === 0) {
    //   return;
    // }
    // todosCtx.addTodo(enteredText);

    if (enteredText && enteredText.trim().length > 0) {
        todosCtx.addTodo(enteredText);
    
        // Clear the input value
        if (todoTextInputRef.current) {
          todoTextInputRef.current.value = "";
        }
    };
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
