import React from 'react';
import Item from './Item';
import './Itemlist.css';

function ItemList() {
  const itemsDis = [
    { id: 1, name: 'Pepper', price: '$2.49', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 2, name: 'Carrot', price: '$2.99/lb', discount: '49%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 3, name: 'Cauliflower', price: '$3.99', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 4, name: 'Coriander Leaves', price: '$0.89', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 5, name: 'Stuff', price: '$1', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 6, name: 'Pepper', price: '$2.49', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 7, name: 'Carrot', price: '$2.99/lb', discount: '49%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 8, name: 'Cauliflower', price: '$3.99', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 9, name: 'Coriander Leaves', price: '$0.89', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
    { id: 10, name: 'Stuff', price: '$1', discount: '27%', image: 'https://via.placeholder.com/100', onSale: true },
  ];

  const items = [
    { id: 1, name: 'Capsicum', price: '$95', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 2, name: 'Carrot', price: '$78', discount: '49%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 3, name: 'Cauliflower', price: '$56', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 4, name: 'Coriander Leaves', price: '$133', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 5, name: 'Coriander Leaves', price: '$133', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 6, name: 'Capsicum', price: '$95', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 7, name: 'Carrot', price: '$78', discount: '49%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 8, name: 'Cauliflower', price: '$56', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 9, name: 'Coriander Leaves', price: '$133', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
    { id: 10, name: 'Coriander Leaves', price: '$133', discount: '27%', image: 'https://via.placeholder.com/100', onSale: false },
  ];

  return (
    <div>
        <div className="item-list">
        {itemsDis.map(item => (
            <Item key={item.id} item={item} />
        ))}
        </div>

        <div className="item-list">
        {items.map(item => (
            <Item key={item.id} item={item} />
        ))}
        </div>
    </div>
  );
}

export default ItemList;
