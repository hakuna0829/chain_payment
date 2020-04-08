import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function SupportPage() {
  return (
    <Layout>
        <div className="support_page">
          <div className="top_div">
            <p className="title">Support</p>
            <p className="desc">
                If you have questions about how ChainPayments works or ways to use it -<br/>
                click a link below. Our experts and our community are here to help.
            </p>
          </div>
       
          <div className="support_list">
              <ul>
                <li>
                  <div className="item">
                    <img src="./images/support_community.png" alt="bitcoin" />
                    <p className="title">Community</p>
                    <div className="divider"></div>
                    <p className="desc">ChainPayments users can <br/>
                    give you pointers and help with <br/>
                    specific issues  you're having. Ask away.</p>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/support_knowledge.png" alt="bitcoin" />
                    <p className="title">Knowledge Base</p>
                    <div className="divider"></div>
                    <p className="desc">Find answers to your questions <br/>
                    quickly with our automated <br/>
                    information system.</p>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/support_guide.png" alt="bitcoin" />
                    <p className="title">How To Guides</p>
                    <div className="divider"></div>
                    <p className="desc">You can do a lot with ChainPayments, <br/>
                    at retail, mobile, and peer-to-peer.<br/>
                    We'll guide you all the way.</p>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/support_faqs.png" alt="bitcoin" />
                    <p className="title">FAQs</p>
                    <div className="divider"></div>
                    <p className="desc">Questions? <br/>
                    Learn more about ChainPayments <br/>
                    You can read about it here.</p>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/support_dictionary.png" alt="bitcoin" />
                    <p className="title">Dictionary</p>
                    <div className="divider"></div>
                    <p className="desc">If you are new to digital currency <br/>
                    and the blockchain technology that <br/>
                    powers it, learn the basics. Click here.</p>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/support_email.png" alt="bitcoin" />
                    <p className="title">Email</p>
                    <div className="divider"></div>
                    <p className="desc">Contact us via <br/>
                    email for questions <br/>
                    concerning ChainPayments.</p>
                  </div>                  
                </li>
               </ul>
            </div>
       
          
          {/* <div className="bottom_bar"></div> */}
        </div>
    </Layout>
  )
}