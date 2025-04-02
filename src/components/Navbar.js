import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavbarStyle.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close Menu on Link Click (for mobile)
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Change Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`NavbarItems ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <h1 className="navbar-logo">Voyago</h1>

      {/* Hamburger Menu Icon */}
      <div className="menu-icons" onClick={toggleMenu}>
        <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url} onClick={closeMenu}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
