import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import { Switch, Route } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
