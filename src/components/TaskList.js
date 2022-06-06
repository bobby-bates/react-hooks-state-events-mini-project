import Task from "./Task";

function TaskList({
  tasks,
  setTasks,
  categories,
  setCategories,
  filterBy,
  setFilterBy
}) {

  const handleTaskDelete = (e) => {
    // TODO: Delete with state
    // console.log(tasks[0])
    // debugger
    // e.target.parentElement
    setTasks(() => tasks.filter(task => !e.target.parentElement.textContent.includes(task.text)))
  }

  // const buttonsToDisplay = categories.filter(cat => {
  //   // debugger
  //   // This line need the task list:
  //   // return filterBy === 'All' ? true : 
  // })
  /*
  The list of tasks being displayed should be filtered,
  so that only tasks that match the category that was
  clicked are displayed.
  */
  const filterTasks = tasks.filter(task => {
    // console.log(tasks)
    // console.log(filterBy)
    // debugger
    return filterBy === 'All' ? true : task.category === filterBy
  })

  const displayTasks = filterTasks.map(({ text, category }) => {
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
