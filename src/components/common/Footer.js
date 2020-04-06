import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="table-row pp-footer">
      <div>
        <div className="containerCentered">
          <div className="content">
            <div className="col-sm-4 col-lg-2 col-md-2 logo-img">
              <img  src="./images/footer_logo.png" alt="" />
            </div>
            
            <div className="col-sm-12 col-lg-2 col-md-2 ">
              <ul>
                <li>
                  <Link to="/merchant">Merchant</Link>
                </li>
                <li>
                  <Link to="/consumer">Consumer</Link>
                </li>
                <li>
                  <Link to="/support_coins">Supported Coins</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-lg-2 col-md-2">
              <ul>
                <li>
                  <Link to="/merchant">Media Kit</Link>
                </li>
                <li>
                  <Link to="/consumer">About</Link>
                </li>
                <li>
                  <Link to="/support_coins">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-lg-3 col-md-3">
              <ul>
                <li>
                  <Link to="/merchant">Log In</Link>
                </li>
                <li>
                  <Link to="/consumer">Sign Up</Link>
                </li>
                <li>                 
                </li>
              </ul>
            </div>

            <div className="col-sm-12 col-lg-3 col-md-3">
                <p>
                    <span>About:</span> ChainPayments is a digital <br></br>
                    currency payment solution built to  <br></br>
                    make using digital currency easy,  <br></br>
                    secure, fast and borderless.
                </p>
            </div>
          </div>

          <div className="bottom row ">
            {/* <ul>
              <li>
              © Copyright 2020, Aeryus Inc. All Rights Reserved.
              </li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/legal">Legal</Link></li>
            </ul> */}
            <p className="m-0 col-lg-9 col-md-12">
              © Copyright 2020, Aeryus Inc. All Rights Reserved.
              <Link to="/privacy">Privacy</Link>
              <Link to="/legal">Legal</Link>
            </p>
            <div className="col-lg-3 col-md-12 footer-social">
              <div className="">
                <Link to=""><img src="/images/social/facebook.png" className="facebook" alt="facebook"></img></Link>
                <Link to=""><img src="/images/social/twitter.png" className="twitter" alt="twitter"></img></Link>
                <Link to=""><img src="/images/social/telegram.png" className="telegram" alt="telegram"></img></Link>
                <Link to=""><img src="/images/social/LinkedIn.png" className="linkedin" alt="LinkedIn"></img></Link>
                <Link to=""><img src="/images/social/Instagram.png" className="instagram" alt="Instagram"></img></Link>
                {/* <Link to=""><img src="/images/social/discord.png" className="facebook" alt="discord"></img></Link> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
