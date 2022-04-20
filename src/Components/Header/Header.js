import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div>
      <nav id="main-navbar">
       <div className="container">
       <h1 className="header-title">Rick & Morty Library</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character">Characters</Link>
          </li>
          <li>
            <Link to="/episode">Episodes</Link>
          </li>
          <li>
            <Link to="/location">Locations</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
       </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Header;
