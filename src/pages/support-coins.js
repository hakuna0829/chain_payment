import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function SupportCoinsPage() {
  return (
    <Layout>
        <div id="support_coin_page">
          <div className="top_div">
            <p className="title">Supported Coins</p>
            <div className="asset_area">
              <p>Assets are available on</p>
              <div className="image_row">
                <div className="mobile">
                  <img src="./images/mobile_icon.png"  alt="mobile" />

                  <p>Mobile</p>
                </div>
                <div className="rule">&ensp;</div>
                <div className="desktop">
                <img src="./images/desktop_icon.png"  alt="desktop" />
                <p>Desktop</p>
                </div>              
                
              </div>
            </div>

            
          </div>
       
          <div className="coin_list">
              <ul>
                <li>
                  <div className="item">
                    <img src="./images/coins/bitcoin.png" alt="bitcoin" />
                    <p>Bitcoin(BTC)</p>
                    <div className="image_row">
                      
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div>
                  </div>                  
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/ethereum.png" className="logo" alt="Ethereum (ETH)" />
                    <p>Ethereum (ETH)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div>                    
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/binance.png" alt="Binance" />
                    <p>Binance (BNB)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/bitcoin_cash.png" alt="bitcoin cash" />
                    <p>Bitcoin Cash (BCH)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/cardano.png" alt="cardano" />
                    <p>Cardano (ADA)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/eos.png" alt="EOS (EOS)" />
                    <p>EOS (EOS)</p>
                    <div className="image_row">
                      <div className="mobile no-border">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>                      
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/dash.png" alt="Dash (DASH)" />
                    <p>Dash (DASH)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src="./images/coins/tether.png" alt="Tether (USDT)" />
                    <p>Tether (USDT)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/monero.png" alt="Monero (XMR)" />
                    <p>Monero (XMR)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/tron.png" alt="Tron (TRX)" />
                    <p>Tron (TRX)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/zcash.png" alt="Zcash (ZEC)" />
                    <p>Zcash (ZEC)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/kubo.png" alt="Kubo (UBO)" />
                    <p>Kubo (UBO)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/stellar.png" alt="Stellar (XLM)" />
                    <p>Stellar (XLM)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>

                <li>
                  <div className="item">
                    <img src="./images/coins/ripple.png" alt="Ripple (XRP)" />
                    <p>Ripple (XRP)</p>
                    <div className="image_row">
                      <div className="mobile">
                        <img src="./images/mobile_icon.png"  alt="mobile" />
                      </div>
                      <div className="desktop">
                        <img src="./images/desktop_icon.png"  alt="desktop" />
                      </div>
                    </div> 
                  </div>
                </li>
              </ul>
            </div>
       
          <div className="request">
            <p>Don't see your coin?</p>
            <p><Link to=""><span>Request</span></Link> a listing here</p>
            <img src="./images/red_mark.png" alt="red mark" />
          </div>
          <div className="bottom_bar"></div>
        </div>
    </Layout>
  )
}