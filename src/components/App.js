import React, { useState } from 'react';
import Menu from './Menu';
import './styles.css';

const allItems = [
  {
    id: 1,
    name: 'Pancakes',
    category: 'breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$5.99',
  },
  {
    id: 2,
    name: 'Burger',
    category: 'lunch',
    image: 'https://via.placeholder.com/150',
    price: '$9.99',
  },
  {
    id: 3,
    name: 'Milkshake',
    category: 'shakes',
    image: 'https://via.placeholder.com/150',
    price: '$4.99',
  },
  {
    id: 4,
    name: 'Omelette',
    category: 'breakfast',
    image: 'https://via.placeholder.com/150',
    price: '$6.49',
  },
  {
    id: 5,
    name: 'Pizza',
    category: 'lunch',
    image: 'https://via.placeholder.com/150',
    price: '$12.99',
  },
  {
    id: 6,
    name: 'Strawberry Shake',
    category: 'shakes',
    image: 'https://via.placeholder.com/150',
    price: '$5.49',
  },
];

function App() {
  const [menuItems, setMenuItems] = useState(allItems);
  const [category, setCategory] = useState('all');

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === 'all') {
      setMenuItems(allItems);
    } else {
      setMenuItems(allItems.filter(item => item.category === cat));
    }
  };

  return (
    <div id="main">
      <h1>Menu</h1>
      <div className="btn-group">
        <button id="filter-btn-1" onClick={() => handleFilter('breakfast')}>Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('lunch')}>Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('shakes')}>Shakes</button>
      </div>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
