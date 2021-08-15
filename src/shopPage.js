import React from "react";

import { ProductMap } from "./Components/productMap";

const shopPage = () => {
  return (
    <div id="shopPageContainer">
      <h1> hello from shopping page</h1>
      <div id="productHolder">
        <ProductMap />
      </div>
    </div>
  );
};
export default shopPage;
