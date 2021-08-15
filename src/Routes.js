import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import ShopPage from "./shopPage.js";
import Cart from "./CartPage.js";
import { Homepage } from "./Components/homepage.js";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Shop" component={ShopPage} />
        <Route path="/Cart" component={Cart} />
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
