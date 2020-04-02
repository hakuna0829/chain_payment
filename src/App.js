import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import HomePage from "./pages/index";
import LoginPage from "./components/auth/LoginPage";
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
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
