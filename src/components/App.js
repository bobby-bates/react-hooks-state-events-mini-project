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

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        setCategories={setCategories}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <NewTaskForm />
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
