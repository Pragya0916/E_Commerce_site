import React from "react";

const Sidebar = ({ categories, onSelectCategory }) => {
  return (
    <aside
      className="bg-light p-3 border-right"
      style={{ minHeight: "100vh", width: "200px" }}
    >
      <p style={{ fontWeight: 500, fontSize: "1rem" }} className="px-1">
        Product Filter
      </p>
      <ul className="list-group ">
        {categories.map((category) => (
          <li
            key={category}
            className="list-group-item list-group-item-action text-capitalize"
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
