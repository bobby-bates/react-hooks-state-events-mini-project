import { useState } from "react";

function NewTaskForm({
  categories,
  setCategories,
  onTaskFormSubmit,
  // reset,
  // setReset,
  newTaskDetails,
  setNewTaskDetails
}) {

  const handleNewTaskDetailsChange = (e => {
    setNewTaskDetails(e.target.value)
  })

  const filterOptions = categories.filter(c => c !== 'All' ? true : null)
  
  const renderOptions = filterOptions.map(c => {
    return <option key={c} value={c}>{c}</option>
  })

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input
        type="text"
        name="text"
        value={newTaskDetails}
        // reset={reset}
        onChange={handleNewTaskDetailsChange}
      />
      </label>
      <label>
        Category
        <select name="category">
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
