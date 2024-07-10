import React from 'react';
import './App.css';
import Header from './Header';
import ItemList from './Itemlist';


function App() {
  return (
    <div className="App">
      <Header />
          <div className="categories">
            <button>Produce</button>
            <button>Baby</button>
            <button>Home Esentials</button>
            <button>Meat</button>
            <button>Clothing</button>
            <button>Health</button>
            <button>Beauty</button>
            <button>Category</button>
            <button>Checkout</button>
            <button>Cart</button>
          </div>
  
      <ItemList />
    </div>
  );
}

export default App;
