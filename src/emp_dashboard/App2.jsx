import React from 'react';
import './App2.css';
import Header from './Header';
import Time from './Time';
import DashInfo from './DashInfo';

function App() {

  return (
    <div className="App">
      <Header />
      <hr></hr>
      <input type="text" className="search" placeholder="Search" />
      <DashInfo />
      <br></br>
      <hr></hr>
      <Time name="8:00 AM" />
      <hr></hr>
      <Time name="9:00 AM" />
    </div>



  );
}

export default App;