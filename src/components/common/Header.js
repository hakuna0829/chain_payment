import React, {useState} from "react";
import { Link } from "react-router-dom";
import LoginPage from "../auth/LoginPage"

export default function Header() {
  const [modalShow, setModalShow] = useState(false);
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
            <a href="#" onClick={() => setModalShow(true)} className="btn btn-small btn-secondary">
              Log In
            </a>
          </div>
        </div>
      </div>
      <LoginPage
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </header>
  );
}
