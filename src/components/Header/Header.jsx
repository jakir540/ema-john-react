import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div>
        <Link to="/">shop</Link>
        <Link to="order">order</Link>

        <Link to="inventory">Inventory</Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;
