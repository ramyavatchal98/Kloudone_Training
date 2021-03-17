import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Showorhide">Show or Hide</Link>
        </li>
        <li>
          <Link to="/Apifetch">API Fetch</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/usecontext">Shopping Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
