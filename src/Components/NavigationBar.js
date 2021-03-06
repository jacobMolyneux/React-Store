import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavigationBar.css";
import shoppingCartImage from "./images/shopping-cart.png";

import CartDisplay from "./CartDisplay";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      quantity: this.props.quantity,
      totalPrice: this.quantity * this.props.price,
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  render() {
    return (
      <div id="navbarHolder">
        <h1>Plant Store</h1>
        <div>
          <Router>
            <nav id="linkDiv">
              <ul>
                <li>
                  <Link to="/" className="link">
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/Shop" className="link">
                    {" "}
                    Shop{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/Cart" className="link">
                    {" "}
                    Cart{" "}
                  </Link>
                </li>
                <li>
                  <div id="cartDiv">
                    <div id="cartIconDiv">
                      <img
                        id="cartIcon"
                        src={shoppingCartImage}
                        alt="Shopping cart"
                        onClick={this._onButtonClick}
                      ></img>
                    </div>
                    <div id="cartQuanityDiv" key={this.props.quantity}>
                      {this.props.quantity}
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </Router>
        </div>

        {this.state.showComponent ? (
          <CartDisplay
            id="cart"
            name={this.props.product}
            quantity={this.props.quantity}
            price={this.props.price}
            Totalprice={this.state.totalPrice}
          />
        ) : null}
      </div>
    );
  }
}
