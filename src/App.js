import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  Home,
  Aboutus,
  Compare,
  Details,
  Products,
  Error,
  Product,
} from "./pages";

import { Header, Navbar, GoldPrice, Footer } from "./components";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <GoldPrice />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutus">
            <Aboutus />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/compare">
            <Compare />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/:type">
            <Product />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
