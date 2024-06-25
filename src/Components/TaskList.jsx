import React from "react";
import "../App.css";
import Todo from "./Todo";

function TaskList({todos , deleteTodo}) {
  return (
    <div className="work-list">
      {todos.map((todo, index)=><Todo todo={todo} index={index} deleteTodo={deleteTodo}/>)}
      
    </div>
  );
}

export default TaskList;
