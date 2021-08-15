import React from "react";
import Monstera from "./images/Monstera.jpeg";
import NavBar from "./NavigationBar";

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
        <div>
          <img src={Monstera} alt="Monstera"></img>
          <div id="detailsDiv">
            <h1>Monstera</h1>
            <p>This is a product description</p>
            <div>
              <div id="quantitySelectors">
                <button>+</button>
                <div>0</div>
                <button>-</button>
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
