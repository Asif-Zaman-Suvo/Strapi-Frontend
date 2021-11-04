import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SiteHeader from "./Components/SiteHeader";
import Category from "./Pages/Category";
import Homepage from "./Pages/Homepage";
import ReviewDetails from "./Pages/ReviewDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <ReviewDetails />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
