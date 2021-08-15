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
        <p className="price"> Price: ${props.price}</p>
        <p className="description">{props.description}</p>
      </div>
      <div id="incrementSelectors">
        <button
          className="quantitySelector"
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
        <div id="quantityDiv">
          <h1 id="quantityDisplay">{quantity}</h1>
        </div>
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
