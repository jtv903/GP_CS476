import React from 'react';
import './Item.css';

function Item({ item }) {
  return (
    <div className="item">
      <div className="item-picture">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="item-details">
        {item.onSale && (
          <div className="item-discount">
            {item.discount} OFF
          </div>
        )}
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}</div>
        <button className="add-to-cart">Add</button>
      </div>
    </div>
  );
}

export default Item;
