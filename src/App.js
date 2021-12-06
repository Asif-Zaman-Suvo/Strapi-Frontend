import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiteHeader from "./Components/SiteHeader";
import Category from "./Pages/Category";
import Homepage from "./Pages/Homepage";
import ReviewDetails from "./Pages/ReviewDetails";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// apollo client

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </Router>
  );
}

export default App;
