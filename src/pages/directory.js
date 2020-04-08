import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function DirectoryPage() {
  return (
    <Layout>
        <div className="support_page">
          <div className="top_div">
            <p className="title">Businesses that accept digital currency</p>
            
          </div>
       
          <div className="business_list">
              <ul>
                <li>
                  <div className="item">
                    <img src="./images/business_giftcard.png" alt="bitcoin" />
                    <p>Gift Cards</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_jewlery.png" alt="bitcoin" />
                    <p>Jewlery</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_food.png" alt="bitcoin" />
                    <p>Food & Beverage</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_health.png" alt="bitcoin" />
                    <p>Health</p>                    
                  </div>                  
                </li>


                <li>
                  <div className="item">
                    <img src="./images/business_charity.png" alt="bitcoin" />
                    <p>Charity/Non-Profit</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_gaming.png" alt="bitcoin" />
                    <p>Gaming</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_electronics.png" alt="bitcoin" />
                    <p>Eletronics</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_software.png" alt="bitcoin" />
                    <p>Software</p>                    
                  </div>                  
                </li>

                <li>
                  <div className="item">
                    <img src="./images/business_services.png" alt="bitcoin" />
                    <p>Professional<br/> Services</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_travel.png" alt="bitcoin" />
                    <p>Travel</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_entertainment.png" alt="bitcoin" />
                    <p>Entertainment</p>                    
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/business_fashion.png" alt="bitcoin" />
                    <p>Fashion</p>                    
                  </div>                  
                </li>
               
              </ul>
            </div>
       
          <div className="request wide">
            <p className="title">Don't see your business?</p>
            <p className="desc"><Link to=""><span>Request</span></Link> a merchant be listed in our directory.</p>
            <img src="./images/red_mark.png" alt="red mark" />
          </div>
          <div className="bottom_bar"></div>
        </div>
    </Layout>
  )
}