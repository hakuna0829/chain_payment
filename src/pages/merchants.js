import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function MerhchantsPage() {
  return (
    <Layout title="Merchants page">
      <div className="container_padding business" id="merchants_page">
        <div>
          <div className="top_header">
            <h2>So much more for merchants</h2>
            <p className="sub-title">
              More customers. More security. Keep more money.
            </p>
            <p className="desc">
              ChainPayments let you sell around the world,
              <br />
              prevents fraud, and shields you from crazy processing fees.
            </p>
            <Link to="" className="btn btn-new2">
              GET STARTED NOW
            </Link>
          </div>

          <div className="global_area">
            <div className="photo">
              <img src="/images/business_man.png" alt="business man"></img>
            </div>
            <div className="content">
              <h2>Your business worldwide</h2>
              <p className="subtitle">
                Sell to anyone, anywhere, in any currency
              </p>

              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>All digital currencies around the world are welcome</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  The ChainPayments App makes it easy for customers to pay
                </div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  With ChainPayments your customers can be anywhere and buy
                  anything
                </div>
              </div>
            </div>
          </div>
          <div className="divider">
            <hr></hr>
          </div>

          <div className="friends_area">
            <div className="content">
              <div>
                <h2>Keep more of your money</h2>
                <p className="subtitle">Save on settlements and fees</p>

                <div className="checkitem">
                  <div>
                    <img src="images/circle_greencheck.png" alt="greencheck" />
                  </div>
                  <div>Way, way lower than card processing fees</div>
                </div>
                <div className="checkitem">
                  <div>
                    <img src="images/circle_greencheck.png" alt="greencheck" />
                  </div>
                  <div>
                    No middlemen to tack on costs, add delays, or expose you to
                    risk
                  </div>
                </div>
                <div className="checkitem">
                  <div>
                    <img src="images/circle_greencheck.png" alt="greencheck" />
                  </div>
                  <div>Borrow less when you get paid in a flash</div>
                </div>
              </div>
            </div>

            <div className="photo">
              <img src="/images/business_woman.png" alt="business woman"></img>
            </div>
          </div>
          <div className="divider">
            <hr></hr>
          </div>

          <div className="shop_area">
            <div className="photo">
              <img src="/images/trust_couple.png" alt="trust" />
            </div>
            <div className="content">
              <h2>Trust and transparency</h2>
              <p className="subtitle">
                Never worry about customers or suppliers
              </p>

              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Blockchain technology provides assurance</div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>
                  Buy and sell with confidence, becuase transactions are
                  legitimate
                </div>
              </div>
              <div className="checkitem">
                <div>
                  <img src="images/circle_greencheck.png" alt="greencheck" />
                </div>
                <div>Fraud is essentially eliminated</div>
              </div>

              <Link to="" className="btn btn-new2">
                START TODAY
              </Link>
            </div>
          </div>
          <div className="divider">
            <hr></hr>
          </div>

          <div className="future_area">
            <div className="content">
            <h2>With ChainPayments</h2>
            <p className="sub-title">Be in control of your revenue</p>
            <div className="currency_grid row">
              <div className="item col-md-4">
                <img src="./images/chain_save_money.svg" alt="save money" />
                <p className="title">Save money</p>
                <p className="desc">
                  No crazy bank fees
                  <br />
                  No charge backs
                  <br />
                  Reduce short-term borrowing
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/chain_fraud.svg" alt="Eliminate fraud" />
                <p className="title">Eliminate fraud</p>
                <p className="desc">
                  Eliminates credit card fraud
                  <br />
                  Personal details and identities are secure
                  <br />
                  Chargebacks are a thing of the past
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img
                  src="./images/chain_receive.svg"
                  alt="Receive settlements Fast"
                />
                <p className="title">Receive settlements FAST!</p>
                <p className="desc">
                  No middlemen to add delays or fees
                  <br />
                  Funds transfer without fear of compromise
                  <br />
                  Payment is in your account in seconds
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/chain_api_plugin.svg" alt="APIs Plug" />
                <p className="title">Use existing APIs and plug ins</p>
                <p className="desc">
                  Works with existing hardware
                  <br />
                  Every major shopping cart plug-n supported
                  <br />
                  Seamless integration
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/chain_dashboard.svg" alt="dashboard" />
                <p className="title">Simplified clean dashboard</p>
                <p className="desc">
                  Data is organized
                  <br />
                  Instantly view business details
                  <br />
                  It’s a suite of free business tools
                  <br />
                </p>
              </div>
              <div className="item col-md-4">
                <img src="./images/chain_transact.svg" alt="Transact" />
                <p className="title">Transact and track</p>
                <p className="desc">
                  Sales data updates automatically
                  <br />
                  Receipts live forever on the blockchain
                  <br />
                  Detailed information ready for your CPA or audit
                  <br />
                </p>
              </div>
            </div>
            <p className="freedom_coming">
              An entire world of new customers is waiting
            </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
