// src/App.js
import React, { useState } from "react";
import Menu from "./Menu"; // ✅ FIXED IMPORT PATH
import menuData from "./data";
import "./styles.css";

function App() {
  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuData);
    } else {
      setItems(menuData.filter(item => item.category === category));
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button id="filter-btn-1" onClick={() => filterItems("breakfast")}>Breakfast</button>
          <button id="filter-btn-2" onClick={() => filterItems("lunch")}>Lunch</button>
          <button id="filter-btn-3" onClick={() => filterItems("shakes")}>Shakes</button>
        </div>

        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
