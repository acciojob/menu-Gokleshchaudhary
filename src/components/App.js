import React, { useState } from 'react';
import Menu from './Menu';
import menuData from './data';
import './styles.css';

function App() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [category, setCategory] = useState('All');

  const filterItems = (category) => {
    setCategory(category);
    if (category === 'All') {
      setMenuItems(menuData);
    } else {
      setMenuItems(menuData.filter((item) => item.category === category));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterItems('Breakfast')}>
          Breakfast
        </button>
        <button id="filter-btn-2" onClick={() => filterItems('Lunch')}>
          Lunch
        </button>
        <button id="filter-btn-3" onClick={() => filterItems('Shakes')}>
          Shakes
        </button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
