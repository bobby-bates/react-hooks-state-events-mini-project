import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  // The selected category:
  const [filterBy, setFilterBy] = useState('All')
  // const [reset, setReset] = useState(false)
  const [newTaskDetails, setNewTaskDetails] = useState('')

  const onTaskFormSubmit = (e) => {
    // VVV DO NOT FORGET THIS!
    e.preventDefault()
    // add a new task to the list with the text and category from the form
    const newTask = { text: e.target[0].value, category: e.target[1].value }
    setTasks([...tasks, newTask])
    setNewTaskDetails('')
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        setCategories={setCategories}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <NewTaskForm 
        categories={categories}
        setCategories={setCategories}
        onTaskFormSubmit={onTaskFormSubmit}
        newTaskDetails={newTaskDetails}
        setNewTaskDetails={setNewTaskDetails}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        categories={categories}
        setCategories={setCategories}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
        />
    </div>
  );
}

export default App;
