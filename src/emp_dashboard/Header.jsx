import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <div className="vertical_line"></div>

      <div className="title"> GreenBasket</div>
      <div className="vertical_line"></div>

      <div className="profile-cart">
        <div className="profile">Profile</div>

        
        <div className="order_history">Order-history</div>
        <div className="logout">Log Out</div>
        
        
      
      </div>
    </header>
  );
}

export default Header;