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
            <p className="title">So much more for merchants</p>
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
        </div>
      </div>
    </Layout>
  );
}
