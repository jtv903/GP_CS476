import React from 'react';
import './app.css';
import Header from './components/Header';
import ItemList from './components/Itemlist';


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
            <button>Category#</button>
          </div>
  
      <ItemList />
    </div>
  );
}

export default App;