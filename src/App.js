import React from "react";
import NavBar from "./Components/NavigationBar.js";
import IphoneBanner from "./Components/Images/IphoneBanner.jpeg";
import Iphone from "./Components/Images/IPhone.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div id="imageHolder">
        <img id="bannerImage" src={IphoneBanner} alt="banner of iphones"></img>
      </div>
      <div>
        <div id="imageButtonHolder">
          <img id="IphoneImage" src={Iphone} alt="iphoneDisplay"></img>
          <div id="buttonHolder">
            <p>Shop the newest iphone for only $1000 dollars!</p>
            <button id="shopMoreButton">Shop More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
