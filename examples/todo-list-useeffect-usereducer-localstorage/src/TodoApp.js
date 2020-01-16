import React from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function todoReducer(prevState, { type, payload }) {
  console.log(type, payload);
  let todos = []; // for temp use
  switch (type) {
    case "initializeTodos": // REMOVE THIS FOR CLASS
      return { ...prevState, todos: payload };
    case "updateInput":
      return { ...prevState, inputValue: payload };
    case "addTodo":
      if (!prevState.inputValue) return { ...prevState }; // they didn't add anything
      const newTodo = { name: prevState.inputValue, done: false };
      return { todos: [...prevState.todos, newTodo], inputValue: "" };
    case "completeToggle":
      todos = [...prevState.todos];
      todos[payload].done = !todos[payload].done;
      return { ...prevState, todos };
    case "removeTodo":
      todos = [...prevState.todos];
      todos.splice(payload, 1);
      return { ...prevState, todos };
    default:
      return { ...prevState };
  }
}

function TodoApp() {
  const [{ todos, inputValue }, dispatchTodoState] = React.useReducer(
    todoReducer,
    {
      todos: [],
      inputValue: ""
    }
  );

  React.useEffect(() => {
    console.log("useEffect :: initial");
    const LStodos = localStorage.getItem("todos");
    if (LStodos)
      dispatchTodoState({
        type: "initializeTodos",
        payload: JSON.parse(LStodos)
      });
  }, []);

  React.useEffect(() => {
    console.log("useEffect :: todos has updated");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatchTodoState({ type: "addTodo" });
  }

  //
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="nes-text is-primary" style={{ float: "left" }}>
        NES ToDo{" "}
      </h2>
      <i className="nes-icon trophy is-small" style={{ float: "right" }} />
      <TodoForm
        value={inputValue}
        onSubmit={handleSubmit}
        onChange={e =>
          dispatchTodoState({ type: "updateInput", payload: e.target.value })
        }
      />
      <ul className="nes-list is-circle">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={() =>
              dispatchTodoState({ type: "removeTodo", payload: index })
            }
            completeToggle={() =>
              dispatchTodoState({ type: "completeToggle", payload: index })
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
