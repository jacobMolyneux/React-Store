import React from "react";
import NavBar from "./Components/NavigationBar";

import { ProductMap } from "./Components/productMap";

const shopPage = () => {
  return (
    <div id="shopPageContainer">
      <NavBar />
      <h1> hello from shopping page</h1>
      <div id="productHolder">
        <ProductMap />
      </div>
    </div>
  );
};
export default shopPage;
