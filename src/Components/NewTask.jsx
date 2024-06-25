import React from "react";
import "../App.css";

function NewTask({input, changeInput, changeTodos}) {
  return (
    <form>
      <input type="text" onChange={changeInput} value={input}  placeholder="add new task" />
      <button onClick={changeTodos}  id="add-btn">+</button>
    </form>
  );
}

export default NewTask;
