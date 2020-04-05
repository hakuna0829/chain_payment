import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../../styles/index.scss";
export default function Layout({ children, title = "ChainPayment", pathname }) {
  return (
    <>
      <Header></Header>
      <div className="container-fluid">{children}</div>
      <Footer></Footer>
    </>
  );
}
