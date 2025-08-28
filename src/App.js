import React, { useState } from "react";
import Menu from "./Menu";
import menuItems from "./data";
import "./styles.css";

function App() {
  const [items, setItems] = useState(menuItems);
  const [category, setCategory] = useState("all");

  const categories = ["all", "breakfast", "lunch", "shakes"];

  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

  return (
    <main id="main">
      <h1>Our Menu</h1>
      <div className="btn-container">
        {categories.map((cat, index) => (
          <button
            key={index}
            id={`filter-btn-${index + 1}`}
            onClick={() => setCategory(cat)}
            className={category === cat ? "filter-btn active" : "filter-btn"}
          >
            {cat}
          </button>
        ))}
      </div>
      <Menu items={filteredItems} />
    </main>
  );
}

export default App;
