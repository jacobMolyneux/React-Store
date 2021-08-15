import React from "react";
import { useState } from "react";

import "./Product.css";

export const Product = (props) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div id="productCard">
      <h1 id="productName">{props.name} </h1>
      <img id="productImage" src={props.image} alt={props.name} />
      <div id="productDetailsDiv">
        <p>Price: ${props.price}</p>
      </div>
      <div id="incrementClicker">
        <button
          className="quantitySelector"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <div>{quantity}</div>
        <button
          className="quantitySelector"
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>
        <button id="buyNowBtn">Buy Now</button>
      </div>
    </div>
  );
};
