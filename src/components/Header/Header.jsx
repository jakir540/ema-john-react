import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

const {user,logOut} =useContext(AuthContext)
console.log(user);

const handleLoggedOut =()=>{
  logOut()
  .then(result =>{})
    .then(error =>{
      console.log(error);
    })
}

  return (
    <nav>
      <div>
        <img src="/src/images/Logo.svg" alt="" />
      </div>
      <div>
        <Link to="/">shop</Link>
        <Link to="/order">order</Link>

        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>

        {
         user && <span className="text-white"> welcome  {user.email} <button onClick={handleLoggedOut}>Logout</button>   </span>

          }
      </div>
    </nav>
  );
};

export default Header;
