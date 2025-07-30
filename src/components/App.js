import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const menuItems = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'Breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$5.99',
  },
  {
    id: 2,
    name: 'Burger',
    category: 'Lunch',
    image: 'https://via.placeholder.com/150',
    price: '$9.99',
  },
  {
    id: 3,
    name: 'Milkshake',
    category: 'Shakes',
    image: 'https://via.placeholder.com/150',
    price: '$4.99',
  },
  {
    id: 4,
    name: 'Omelette',
    category: 'Breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$6.49',
  },
  {
    id: 5,
    name: 'Fries',
    category: 'Lunch',
    image: 'https://via.placeholder.com/150',
    price: '$3.99',
  },
  {
    id: 6,
    name: 'Strawberry Shake',
    category: 'Shakes',
    image: 'https://via.placeholder.com/150',
    price: '$5.49',
  },
];

const App = () => {
  const [items, setItems] = useState(menuItems);

  const filterMenu = (category) => {
    const filtered = menuItems.filter((item) => item.category === category);
    setItems(filtered);
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="buttons">
        <button id="filter-btn-1" onClick={() => filterMenu('Breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => filterMenu('Lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => filterMenu('Shakes')}>Shakes</button>
      </div>
      <Menu items={items} />
    </div>
  );
};

export default App;
