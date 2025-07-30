import React, { useState } from 'react';
import Menu from './Menu';

const menuItems = [
  { id: 1, name: "Pancakes", category: "Breakfast", price: "$5", image: "https://via.placeholder.com/100" },
  { id: 2, name: "Omelette", category: "Breakfast", price: "$4", image: "https://via.placeholder.com/100" },
  { id: 3, name: "Burger", category: "Lunch", price: "$8", image: "https://via.placeholder.com/100" },
  { id: 4, name: "Pizza", category: "Lunch", price: "$10", image: "https://via.placeholder.com/100" },
  { id: 5, name: "Strawberry Shake", category: "Shakes", price: "$3", image: "https://via.placeholder.com/100" },
  { id: 6, name: "Chocolate Shake", category: "Shakes", price: "$3.5", image: "https://via.placeholder.com/100" }
];

const App = () => {
  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    const filtered = menuItems.filter(item => item.category === category);
    setItems(filtered);
  };

  return (
    <div id="main">
      <button id="filter-btn-1" onClick={() => filterItems("Breakfast")}>Breakfast</button>
      <button id="filter-btn-2" onClick={() => filterItems("Lunch")}>Lunch</button>
      <button id="filter-btn-3" onClick={() => filterItems("Shakes")}>Shakes</button>
      <Menu items={items} />
    </div>
  );
};

export default App;
