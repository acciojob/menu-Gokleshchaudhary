import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, title, img, desc, price, category } = item;
        const testId = `menu-item-${category}`;

        return (
          <article key={id} className="menu-item" data-test-id={testId}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;

