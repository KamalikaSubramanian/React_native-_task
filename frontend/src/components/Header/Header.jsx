import React from 'react'
import dropdown from "./assets/dropdown.jpg";
import logo from "../Header/assets/logo.jpeg";
import search from "../Header/assets/search.jpg";
import cart from "../Header/assets/cart.jpg";

function Header() {
  return (
    <div className='header'>
      <div className="shop">
        <span><b>SHOP</b></span>
        <img src={dropdown} alt="dropdown" className='dropdown' />
      </div>
      <img src={logo} alt="logo" className='logo' />
      <div className="icons">
        <img src={search} alt="search" />
        <img src={cart} alt="cart" />
      </div>
    </div>
  )
}

export default Header