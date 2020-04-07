import React, {useState, useRef} from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import Carousel, { Dots } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

export default function HomePage() {

  return (
    <Layout title="Home page" id="homepage">
      <div>
        <div className="top_banner">
          <div className="left_banner">
            <img src="images/merchant.png" alt="" />
            <div className="content">
              <h3>Merchants</h3>
              <p>
                Start accpeting any digital currency
                <br />
                Receive payment in seconds
                <br />
                Sign up for FREE!
              </p>
              <Link to="" className="btn btn-new1">
                GET STARTED
              </Link>
            </div>
          </div>
          <div className="right_banner">
            <img src="images/consumers.png" alt="" />
            <div className="content">
              <h3>Consumers</h3>
              <p>
                ChainPayments makes paying
                <br />
                with digital currency easy.
                <br />
                Coming soon!
              </p>
              <Link to="" className="btn btn-new1">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
        {/* business section */}
        <div className="business_section">
          <div className="photo">
            <img src="/images/business_girl.png" alt="business"></img>
          </div>
          <div className="content">
            <h2>
              Start accepting digital <br /> currently today!
            </h2>
            <p className="subtitle">
              <span>MERCHANTS:</span> Open your account
              <br />
              in just 3 easy steps.
            </p>

            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>
                Increase your revenue opportunities. <span>START NOW</span>
              </div>
            </div>
            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>
                Receive payments in seconds - no settlement
                <br />
                delays, no crazy bank charges. <span>DON'T WAIT</span>
              </div>
            </div>
            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>
                No chargeback fees - fraudulent purchases are
                <br />
                basically eliminated. <span>START HERE</span>
              </div>
            </div>

            <p className="bottom_description">
              It's your money. Get it faster and keep more of it!
            </p>
            <Link to="" className="btn btn-skyblue">
              GET STARTED NOW
            </Link>
          </div>
        </div>
        <div className="divider">
          <hr />
        </div>
        {/* testimonials */}
        <div className="testimonial">
          <Carousel
            slidesPerPage={3}
            // arrows
            infinite
            breakpoints={{
              640: {
                slidesPerPage: 1,
                arrows: false
                // offset: 30
              },
              900: {
                slidesPerPage: 2,
                arrows: false
                // offset: 30
              }
            }}
          >
            <div className="item">
              <p>
                Of all our dreams today there is none more important - or so
                hard to realise - than that of peace in the world. May we never
                lose our faith in it or our resolve to do everything that can be
                done to convert it one day into reality.
              </p>
              <h4>John David</h4>
              <p className="company">
                Monopoly, <span>Company</span>
              </p>
            </div>
            <div className="item">
              <p>
                Of all our dreams today there is none more important - or so
                hard to realise - than that of peace in the world. May we never
                lose our faith in it or our resolve to do everything that can be
                done to convert it one day into reality.
              </p>
              <h4>John David</h4>
              <p className="company">
                Monopoly, <span>Company</span>
              </p>
            </div>
            <div className="item">
              <p>
                Of all our dreams today there is none more important - or so
                hard to realise - than that of peace in the world. May we never
                lose our faith in it or our resolve to do everything that can be
                done to convert it one day into reality.
              </p>
              <h4>John David</h4>
              <p className="company">
                Monopoly, <span>Company</span>
              </p>
            </div>
          </Carousel>
        </div>
        {/* consumer section */}
        <div className="consumer_section">
          <div className="content">
            <h2>Take control of your money</h2>
            <p className="subtitle">
              <span>CONSUMERS:</span> ChainPayments is fast, easy and secure.
            </p>

            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>Peer to peer transactions and all kinds of purchases</div>
            </div>
            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>No more bank feeds or delays</div>
            </div>
            <div className="checkitem">
              <div>
                <img src="images/circle_greencheck.png" alt="greencheck" />
              </div>
              <div>
                Your money goes straight to its destination - no middleman,
                <br />
                no worry over identify theft or accounts being compromised
              </div>
            </div>

            <p className="bottom_description">Be your own bank</p>
            <Link to="" className="btn btn-skyblue">
              COMING SOON
            </Link>
          </div>

          <div className="photo">
            <img src="/images/consumer_guy.png" alt="business"></img>
          </div>
        </div>
      </div>
    </Layout>
  );
}
