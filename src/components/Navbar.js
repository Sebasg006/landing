import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import Logo from "../assets/Logo.svg";

const links = [
  { text: "Home", href: "#home" },
  { text: "About", href: "#about" },
  { text: "How it works", href: "#work" },
  { text: "Testimonials", href: "#testimonials" },
  { text: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Foodie" />
      </div>
      <div className="navbar-links-container">
        {links.map((link) => (
          <a key={link.text} href={link.href}>
            {link.text}
          </a>
        ))}
        <a href="#home" aria-label="Cart">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button">Order now</button>
      </div>
      <div className="navbar-menu-container">
        <button
          className="menu-toggle"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <HiXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
      {openMenu && (
        <div className="mobile-menu">
          {links.map((link) => (
            <a key={link.text} href={link.href} onClick={() => setOpenMenu(false)}>
              {link.text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
