import React from "react";
import Monstera from "./images/Monstera.jpeg";
import NavBar from "./NavigationBar";
import "./stylesheets/homepage.css";

const Homepage = () => {
  return (
    <div id="homepageContainer">
      <NavBar />
      <div id="pageContents">
        <div id="bannerSection">
          <img src="" alt="bannerImage"></img>
          <h1>Find the Perfect House Plant</h1>
          <button id="shopMoreBtn">Shop Now</button>
        </div>
        {/* main product to display section */}
        <div id="highlightedProduct">
          <img id="ProductPhoto" src={Monstera} alt="Monstera"></img>
          <div id="detailsDiv">
            <h1>Monstera</h1>
            <p>This is a product description</p>
            <div>
              <div id="quantitySelectors">
                <button className="quantityButton">+</button>
                <div id="quantityDisplay">0</div>
                <button className="quantityButton">-</button>
              </div>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Homepage };
