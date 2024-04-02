import React, { useState } from "react";
import logo from "../assets/icons_assets/Logo.svg";
import menu from "../assets/icons_assets/menu.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>


        {/* mobile Nav */}
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menu} alt="menu" />
        </div>




        {/* Nav items */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
     
          <li>
            <a href="/">Reservation</a>
          </li>
          <li>
            <a href="/">Order_Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>

        <div></div>
      </nav>
    </>
  );
};

export default Nav;
