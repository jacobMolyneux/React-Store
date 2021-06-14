import React from "react";
import Navbar from "./NavigationBar.js";
import "./Product.css";
import iphone from "/Users/Jacobmolyneux/Desktop/shopping-cart-app/src/Components/Images/IPhone.png";

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      price: this.props.price,
      quantity: 0,
      cartQuantity: 0,
    };
    this.increment = () => {
      this.setState({ quantity: this.state.quantity + 1 });
      console.log(this.state.quantity);
    };
    this.decrease = () => {
      if (this.state.quantity > 0) {
        this.setState({ quantity: this.state.quantity - 1 });
      } else if (this.state.quantity <= 0) {
        this.setState({ quantity: 0 });
      }
    };
    this.addToCart = (value) => {
      this.setState({ cartQuantity: this.state.quantity });
      console.log(
        "quantity state is " +
          this.state.quantity +
          " cart Quantity state is : " +
          this.state.cartQuantity
      );
    };
  }
  render() {
    return (
      <div id="pageContainer">
        <Navbar quantity={this.state.cartQuantity} />
        <div id="productHolder">
          <div id="imageHolder">
            <img id="iphoneImage" src={iphone} alt="Iphone image"></img>
          </div>
          <div id="purchaseInfo">
            <div id="detailsDiv">
              <p id="nameDisplay">{this.state.name}</p>
              <p id="priceDisplay"> ${this.state.price}</p>
              <p id="productDescription">
                Get infinitely spectacular possibilities with the iPhone 12 Pro
                Max. It features the powerful A14 Bionic chip, 5G to download
                and stream high-quality video, a bright 6.7" Super Retina XDR
                display, and Ceramic Shield for better drop performance. Other
                features include a LiDAR scanner, a triple-camera system with
                cinema-grade Dolby Vision, MagSafe accessories for wireless
                charging, and much more.
              </p>
            </div>
            <div id="quantityDiv">
              <button
                id="decreaseButton"
                class="quantityButton"
                onClick={this.decrease}
              >
                -
              </button>
              <div id="quantityDisplay" class="quantityButton">
                {this.state.quantity}
              </div>
              <button
                id="increaseButton"
                class="quantityButton"
                onClick={this.increment}
              >
                +
              </button>

              <button id="addToCartButton" onClick={this.addToCart}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
