import { useState } from "react";
import Task from "./Task";

function TaskList({ TASKS }) {
  const [tasks, setTasks] = useState(TASKS)

  // Removing parent DOM element w/o state
  const handleTaskDelete = (e) => e.target.parentElement.remove()

  const displayTasks = tasks.map(({ text, category }) => {
      // debugger
      return (
        <Task 
          key={text}
          text={text}
          category={category}
          onTaskDelete={handleTaskDelete}
        />
      )
    });

  return (
    <div className="tasks">
      {displayTasks}
    </div>
  );
}

export default TaskList;
