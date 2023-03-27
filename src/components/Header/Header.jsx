import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div>
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div>
        <a href="/order">order</a>
        <a href="/Order review">Order Review</a>
        <a href="/manage inventory">Manage Inventory</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default Header;
