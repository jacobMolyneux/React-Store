import React from "react";
import "./CartDisplay.css";

export default class CartDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.name,
      image: this.props.image,
      quantity: this.props.quantity,
      price: this.props.price,
      TotalPrice: this.props.price * this.props.quantity,
    };
  }

  render() {
    return (
      <div id="CartContainer">
        <div id="ProductDisplay">
          <img
            id="productImage"
            src={this.props.image}
            alt="productImage"
          ></img>
          <div id="productDetailsDiv">
            <p id="ProductName" className="CartDescription">
              {" "}
              {this.state.item}
            </p>
            <p id="productPrice" className="CartDescription">
              Item Price: {this.state.price}
            </p>
            <p id="quanity Selected" className="CartDescription">
              Quantity: {this.state.quantity}
            </p>
          </div>
        </div>
        <div id="cartTotal">
          <div id="totalPrice Display">
            {" "}
            Total Price: ${this.state.TotalPrice}
          </div>
          <button>Checkout</button>
        </div>
      </div>
    );
  }
}
