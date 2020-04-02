import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="table-row pp-header" role="banner">
      {/* <button type="button" class="btn btn-primary">Primary</button> */}
      <div>
        {/* <img src="./images/CP_logo.png" alt=""/> */}
        <div className="containerCentered ">
          <Link to="/" className="img-logo">
            <img src="./images/CP_logo.png" alt="" />
          </Link>
          <nav id="main-menu" className="main-menu" role="navigation">
            <ul>
              <li>
                <Link to="/consumers">Conusmers</Link>
              </li>
              <li>
                <Link to="/Merchants">Merchants</Link>
              </li>
              <li>
                <Link to="/Supported Coins">Supported Coins</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </nav>
          <div id="header-buttons" className="header-buttons">
            <Link to="/signup" className="btn btn-small btn-signup">
              Sign Up
            </Link>
            <Link to="/login" className="btn btn-small btn-secondary">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
