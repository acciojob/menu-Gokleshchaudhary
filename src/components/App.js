// src/components/App.js
import React, { useState } from 'react';
import Menu from './Menu'; // ✅ Make sure Menu.js is in the same folder
import './styles.css';     // ✅ Make sure styles.css is in the same folder

// Sample data
const allMenuItems = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$5.99'
  },
  {
    id: 2,
    name: 'Burger',
    category: 'lunch',
    image: 'https://via.placeholder.com/150',
    price: '$9.99'
  },
  {
    id: 3,
    name: 'Milkshake',
    category: 'shakes',
    image: 'https://via.placeholder.com/150',
    price: '$4.99'
  },
  {
    id: 4,
    name: 'Omelette',
    category: 'breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$6.49'
  },
  {
    id: 5,
    name: 'Fries',
    category: 'lunch',
    image: 'https://via.placeholder.com/150',
    price: '$3.49'
  },
  {
    id: 6,
    name: 'Strawberry Shake',
    category: 'shakes',
    image: 'https://via.placeholder.com/150',
    price: '$5.49'
  }
];

function App() {
  const [menuItems, setMenuItems] = useState(allMenuItems);

  const handleFilter = (category) => {
    const filtered = allMenuItems.filter(item => item.category === category);
    setMenuItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu App</h1>

      <div className="buttons">
        <button id="filter-btn-1" onClick={() => handleFilter('breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('shakes')}>Shakes</button>
      </div>

      <Menu items={menuItems} />
    </div>
  );
}

export default App;
