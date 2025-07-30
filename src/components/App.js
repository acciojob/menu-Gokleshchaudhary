import React, { useState } from "react";
import Menu from "./Menu";
import menuData from "./data";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState("All");

  const filterMenu = (cat) => {
    setCategory(cat);
    if (cat === "All") {
      setItems(menuData);
    } else {
      const filtered = menuData.filter(item => item.category === cat);
      setItems(filtered);
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterMenu("Breakfast")}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterMenu("Lunch")}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterMenu("Shakes")}>Shakes</button>
      </div>
      <Menu items={items} />
    </div>
  );
};

export default App;
