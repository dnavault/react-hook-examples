import React from "react";

import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

//Initial tasks
const tasks = [
  { name: "task 1", done: false },
  { name: "task 2", done: false },
  { name: "task 3", done: true }
];

function TodoApp() {
  const [todos, setTodos] = React.useState(tasks);
  const [inputValue, setInputValue] = React.useState("");

  function _handleSubmit(e) {
    e.preventDefault();
    if (inputValue === "") return alert("Task name is required");

    setTodos(previousTodos => [
      { name: inputValue, done: false },
      ...previousTodos
    ]);
    setInputValue("");
  }

  //
  const _handleBntClick = ({ type, index }) => {
    setTodos(previousTodos => {
      const newArr = [...previousTodos];

      if (type === "remove") newArr.splice(index, 1);
      if (type === "completed") newArr[index].done = true;

      return newArr;
    });
  };

  //
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2 className="nes-text is-primary" style={{ float: "left" }}>
        NES ToDo{" "}
      </h2>
      <i className="nes-icon trophy is-small" style={{ float: "right" }} />
      <TodoForm
        onSubmit={_handleSubmit}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <ul className="nes-list is-circle">
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            remove={() => _handleBntClick({ type: "remove", index })}
            completed={() => _handleBntClick({ type: "completed", index })}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
