import { useState } from "react";

function CategoryFilter({
  categories,
  setCategories,
  filterBy,
  setFilterBy
}) {

  const handleCatButtonClick = (e) => setFilterBy(e.target.value)

  const renderCatButtons = categories.map(cat =>
    (
      <button
        key={cat}
        className={ cat === filterBy ? 'selected' : null }
        onClick={handleCatButtonClick}
        value={cat}>{cat}</button>
    )
  )

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCatButtons}
    </div>
  );
}

export default CategoryFilter;
