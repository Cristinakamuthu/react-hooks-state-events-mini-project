import React from "react";

function Task({ text, categorize, onDeleteHandle }) {
  return (
    <div className="task">
      <div className="label">{categorize}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDeleteHandle}>X</button>
    </div>
  );
}

export default Task;
