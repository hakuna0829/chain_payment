import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";

export default function MediaKitPage() {
  return (
    <Layout>
      <div className="support_page">
        <div className="top_div">
          <p className="title">Media Kit</p>
          <p className="desc">Download our resource</p>
        </div>

        <div className="meida_list">
          <ul>
            <li>
              <div className="item">
                <div className="logo">
                  <img src="./images/media_logos.png" alt="Logo" />
                </div>
                <p>Logos</p>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="logo">
                  <img src="./images/media_branding.png" alt="Branding" />
                </div>
                <p>Branding Guide</p>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="logo">
                  <img src="./images/media_stickers.png" alt="Stickers" />
                </div>
                <p>Stickers</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
