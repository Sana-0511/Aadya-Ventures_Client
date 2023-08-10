import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <a href="#" className="logo">
        <Link to="/">
          <h1 className="text-2xl text-white lg:text-[28px] font-semibold leading-none mb-6 mt-6 pl-[-25px]">Aadya Ventures</h1>
        </Link>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" checked={isMenuOpen} onChange={toggleMenu} />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/">
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
        </Link>
        {/* <li>
          <Link to="/About">About</Link>
        </li> */}
        <li>
          <Link to="/HouseList">Property</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
