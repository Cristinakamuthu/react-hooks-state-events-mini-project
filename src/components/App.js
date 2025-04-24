import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState([...TASKS]);

  function addNewTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories}  onCategoryChange={addNewTask}/>
      <NewTaskForm onTaskFormSubmit={addNewTask} categories={CATEGORIES} />
      <TaskList categories={CATEGORIES} tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
