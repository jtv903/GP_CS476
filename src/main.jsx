import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './main.css';
import Header from './Header';
import ItemList from './Itemlist';
import Checkout from './Checkout';

function Home() {
  const navigate = useNavigate();
  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="App">
      <Header />
      <div className="categories">
        <button>Produce</button>
        <button>Baby</button>
        <button>Home Essentials</button>
        <button>Meat</button>
        <button>Clothing</button>
        <button>Health</button>
        <button>Beauty</button>
        <button>Category</button>
        <button onClick={goToCheckout}>Checkout</button>
      </div>
      <ItemList />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;