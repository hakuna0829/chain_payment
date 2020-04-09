import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/index";
import ConsumersPage from "./pages/consumers";
import MerchantsPage from "./pages/merchants";
import SupportCoinsPage from "./pages/support-coins";
import SupportPage from "./pages/support";
import MediaKitPage from "./pages/media-kit";
import DirectoryPage from "./pages/directory";
// import ContactUsPage from "./pages/contact";
import configureStore from "./store";

import "./styles/app.scss";
const store = configureStore({});

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/consumers">
              <ConsumersPage />
            </Route>
            <Route path="/merchants">
              <MerchantsPage />
            </Route>
            <Route path="/support-coins">
              <SupportCoinsPage />
            </Route>
            <Route path="/support">
              <SupportPage />
            </Route>
            <Route path="/media-kit">
              <MediaKitPage />
            </Route>
            {/* <Route path="/contact">
              <ContactUsPage />
            </Route> */}
            <Route path="/directory">
              <DirectoryPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
