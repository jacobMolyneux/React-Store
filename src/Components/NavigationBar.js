import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NavigationBar.css";
import cartIcon from "/Users/Jacobmolyneux/Desktop/shopping-cart-app/src/Components/Images/shoppingCartIcon.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      quantity: this.props.quantity,
      totalPrice: this.quantity + this.props.price,
    };
  }
  render() {
    return (
      <div id="navbarHolder">
        <h1>Iphone Store</h1>
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
                      <img id="cartIcon" src={cartIcon}></img>
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
      </div>
    );
  }
}
