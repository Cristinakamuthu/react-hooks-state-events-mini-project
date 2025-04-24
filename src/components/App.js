import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState([...TASKS]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setSelectedCategory(newTask.category);
  };

  const deleteTask = (indexToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToDelete));
  };

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        onCategoryChange={setSelectedCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={addNewTask}
        categories={CATEGORIES}
      />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
