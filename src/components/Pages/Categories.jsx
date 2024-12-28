import React from "react";

const Categories = () => {
  const categories = ["Work", "Personal", "Shopping", "Fitness", "Other"];

  return (
    <div className="categories-container p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Task Categories</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="bg-blue-600 text-white p-4 rounded shadow hover:bg-blue-700 transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
