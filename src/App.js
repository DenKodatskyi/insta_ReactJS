import React from "react";
import Header from "./components/Header/Header";
import Stripe from "./components/Stripe/Stripe";
import Profile from "./components/Profile/Profile"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={Stripe} exact />
        <Route path="/profile" component={Profile} exact />
      </div>
    </Router>
  );
}

export default App;
