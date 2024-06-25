import React from "react";

function Todo({todo,index,deleteTodo}) {
  return (
    <div className="to-do">
      <p>{todo}</p>
      <div className="left">
        <input className="checkbox" type="checkbox" />
        <button className="del-btn" onClick={()=>deleteTodo(index)}> Delete </button>
      </div>
    </div>
  );
}

export default Todo;
