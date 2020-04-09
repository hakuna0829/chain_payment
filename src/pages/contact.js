import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/common/Layout";
import "@brainhubeu/react-carousel/lib/style.css";
import { GoogleMap, withScriptjs, withGoogleMap, Marker  } from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultCenter={{ lat: 26.12783, lng: -80.143915 }}
      defaultZoom={15}>
      <Marker position={{ lat: 26.12783, lng: -80.143915 }}  />
      </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function ContactUsPage() {
    const isMarkerShown = useState(true);
  return (
    <Layout>
      <div className="contact_page">
        <div className="top_div">
          <p className="title">Contact us</p>
        </div>

        <div className="main_div">
          <div className="form">
            <p className="title">CONTACT INFO:</p>
            <div className="contact_row">
              <img src="./images/contact_location.png" alt="location" />
              <div className="info">
                <p className="label">Postal address:</p>
                <p className="desc">
                  23 NW 5th Street | Fort Lauderdale, FL 33301
                </p>
              </div>
            </div>
            <div className="contact_row">
              <img src="./images/contact_phone.png" alt="phone" />
              <div className="info">
                <p className="label">Phone:</p>
                <p className="desc">866.423.7987</p>
              </div>
            </div>
            <div className="contact_row">
              <div className="info_row">
                <img src="./images/contact_email.png" alt="Email" />
                <div className="info">
                  <p className="label">Email:</p>
                  <p className="desc">info@chainpayments.io</p>
                </div>
              </div>
              <div className="info_row">
                <img src="./images/contact_web.png" alt="Web" />
                <div className="info">
                  <p className="label">Web:</p>
                  <p className="desc">www.chainpayments.io</p>
                </div>
              </div>
            </div>
          </div>
          <div className="map">
            <p className="title">LOCATION ON MAP</p>
            <div style={{ width: "100%", height: "400px" }}>
              <WrappedMap
              isMarkerShown 
                googleMapURL={
                  "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCxwIQ5vAQO15TgGGTnJSS-MA_nvhMiAAM"
                }
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
