import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function ConsumerPage() {
  return (
    <Layout title="Consumer page">
      <div className="container_padding" id="consumer_page">
        {/* <div className="content"> */}
        <div>
          <div className="top_header">
            <p className="title">
              Start using digital currency for everything!
            </p>
            <p className="sub-title">
              Use ChainPayments for any digital currency you own
            </p>
            <p className="desc">
              If you've ever used your phone to pay for anything. ChainPayments{" "}
              <br />
              works the same way. And it's far safer and globally accepted.
            </p>
            <Link to="" className="btn btn-new2">
              COMING SOON
            </Link>
          </div>
          
          <div className="global_area">
            <div className="photo">
              <img src="/images/global_woman.png" alt="global woman"></img>
            </div>
            <div className="content">
              <h2>Go global</h2>
              <p className="subtitle">
                Money instantly - from anywhere to anywhere
              </p>

              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Borderless, across town, across the globe</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Currency conversion is automatic</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  No foregin conversion fees or other crazy bank charges
                </div>
              </div>
            </div>
          </div>
          <div className="divider" >
            <hr></hr>
          </div>
          <div className="friends_area">
            <div className="content">
              <h2>Funds to friends and family</h2>
              <p className="subtitle">
                Send or receive quickly with a couple of clicks
              </p>

              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Split the check or pay the dry cleaner, no processing delays</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  Send money to a kid in college, digital wallet to digital
                  wallet
                </div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Your accounts, funds and identity are safe and secure</div>
              </div>
            </div>

            <div className="photo">
              <img src="/images/friends_guy.png" alt="global woman"></img>
            </div>
          </div>
          <div className="divider" >
            <hr></hr>
          </div>
          <div className="shop_area">
            <div className="photo">
              <img src="/images/waitress.png" alt="waitress lady" />
            </div>
            <div className="content">
              <h2>Shop everywhere</h2>
              <p className="subtitle">Tap, tap, scan and go</p>

              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Works like money at checkout</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Everywhere from farmer's markets to mega stores</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Way more secure than typical payment terminals</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  Forever receipts are easy to retrieve from the blockchain
                </div>
              </div>

              <Link to="" className="btn btn-new2">
                COMING SOON
              </Link>
            </div>
          </div>
          <div className="divider" >
            <hr></hr>
          </div>
          <div className="future_area">
            <p className="title">The future of money is digital</p>
            <p className="sub-title">Be your own bank</p>
            <div className="currency_grid row">
              <div className="item col-md-4">
                <img src="./images/currency_wallet.png" alt="wallet" />
                <p className="title">Multi-currency wallet</p>
                <p className="desc">
                  Pay anyone in your contact list
                  <br />
                  Values continually updated
                  <br />
                  Use any currency you own
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/currency_secure.png" alt="wallet" />
                <p className="title">Secure</p>
                <p className="desc">
                  Way safer than banks
                  <br />
                  No middlemen to compromise data
                  <br />
                  Transaction details encrypted
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/currency_fast.png" alt="wallet" />
                <p className="title">Fast</p>
                <p className="desc">
                  No waiting on transactions
                  <br />
                  Spend funds the moment you receive them
                  <br />
                  See confirmations instantly
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/currency_transact.png" alt="wallet" />
                <p className="title">Transact and Track</p>
                <p className="desc">
                  No limits
                  <br />
                  Receipts stay organized forever
                  <br />
                  All your digital funds, always available
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/currency_fraud.png" alt="wallet" />
                <p className="title">Fraud detection</p>
                <p className="desc">
                  Only you can access your funds
                  <br />
                  Industry leading artificial intelligence
                  <br />
                  Learns and protects your transactions
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/currency_converts.png" alt="wallet" />
                <p className="title">Converts any digital currency</p>
                <p className="desc">
                  Supports all common digital currencies
                  <br />
                  No fee to manage conversion
                  <br />
                  The most portable money solution
                  <br />
                </p>
              </div>
            </div>
            <p className="freedom_coming">Financial freedom is coming soon to an app store near you...</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
