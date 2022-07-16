import React from "react";
import "./categories.css";
function Categories({ categories, filterMenu }) {
  return (
    <article className="menu">
      {categories.map((categoryName) => (
        <button
          onClick={() => filterMenu(categoryName)}
          className="menuButton"
          key={categoryName}
        >
          {categoryName}
        </button>
      ))}
    </article>
  );
}

export default Categories;
