import React from "react";
import "./App.css";
import NewTask from "./Components/NewTask";
import TaskList from "./Components/TaskList";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function changeInput(e) {
    setInput(e.target.value);
  }

  function changeTodos(e) {
    e.preventDefault();
    if (input != "") {
      setTodos((previousarr) => [...previousarr, input]);
      setInput("");
    }
  }
  function deleteTodo(index) {
    setTodos((previousarr) =>
      previousarr.filter((previousarr, curindex) => curindex != index)
    );
  }
  return (
    <main className="container">
      <h1>To-Do-App</h1>
      <NewTask
        input={input}
        changeInput={changeInput}
        changeTodos={changeTodos}
      />
      <TaskList todos={todos} deleteTodo={deleteTodo} />
    </main>
  );
}

export default App;
