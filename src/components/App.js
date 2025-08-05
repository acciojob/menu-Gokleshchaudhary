import React, { useState } from "react";
import menuData from "./data";
import Menu from "./Menu";

function App() {
  const [menuItems, setMenuItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menuData);
    } else {
      const newItems = menuData.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main id="main">
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems("lunch")}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems("shakes")}>
          Shakes
        </button>
      </div>
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
