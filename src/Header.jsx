import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <input type="text" className="search" placeholder="Search for Products" />
      <div className="profile-cart">
        <div className="profile">Profile</div>
        <div className="cart">Cart</div>
      </div>
    </header>
  );
}

export default Header;
