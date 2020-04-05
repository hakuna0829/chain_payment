import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/index";
import ConsumerPage from "./pages/consumer";
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
              <ConsumerPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
