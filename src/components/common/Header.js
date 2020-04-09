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
            {/* <Link to="/signup" className="btn btn-small btn-secondary"> */}
            {/* <a href="#" onClick={() => setSignUpModalShow(true)} className=" btn-signup">
              Sign Up
            </a>
            <a href="#" onClick={() => setLoginModalShow(true)} className="">
              Log In
            </a> */}
            <Link onClick={() => setSignUpModalShow(true)} className="signup_link">Sign Up</Link>
            <span className="bar">|</span> 
            <Link onClick={() => setLoginModalShow(true)} className="login_link">Log In</Link>
            
          </div>
        </div>
      </div>
      <div className="blue_area" />
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
