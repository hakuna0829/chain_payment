import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import SignUpPage from "../auth/SignupPage";

export default function Header() {
  const [loginModalShow, setLoginModalShow] = useState(false);
  const [signUpModalShow, setSignUpModalShow] = useState(false);

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
                <Link to="/consumers">Consumers</Link>
              </li>
              <li>
                <Link to="/merchants">Merchants</Link>
              </li>
              <li>
                <Link to="/support-coins">Supported Coins</Link>
              </li>
              <li>
                <Link to="/support">Support</Link>
              </li>
            </ul>
          </nav>
          <div id="header-buttons" className="header-buttons">
            {/* <Link to="/signup" className="btn btn-small btn-signup"> */}
            <a href="#" onClick={() => setSignUpModalShow(true)} className="btn btn-small btn-secondary btn-signup">
              Sign Up
            </a>
            <a href="#" onClick={() => setLoginModalShow(true)} className="btn btn-small btn-secondary">
              Log In
            </a>
          </div>
        </div>
      </div>
      <LoginPage
        show={loginModalShow}
        onHide={() => setLoginModalShow(false)}        
      />
      <SignUpPage
        show={signUpModalShow}
        onHide={() => setSignUpModalShow(false)}
      />
    </header>
  );
}
