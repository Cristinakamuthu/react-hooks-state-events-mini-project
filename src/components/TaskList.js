import React from "react";
import Task from "./Task";

function TaskList({ categories, tasks, deleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task
          key={index}
          text={task.text}
          categorize={task.category}
          onDeleteHandle={() => deleteTask(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;
