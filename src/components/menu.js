// src/components/Menu.js
import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="menu">
      {items.map(item => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} />
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
