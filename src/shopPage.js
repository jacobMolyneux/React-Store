import React from "react";
import Navbar from "./Components/NavigationBar.js";
import Product from "./Components/Product.js";

const shopPage = () => {
  return (
    <div>
      <Product name="IPhone XR Max" price={1000} />
    </div>
  );
};
export default shopPage;
