import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  const [showResults, setShowResults] = React.useState(false);
  const cartToggle = () => {
    console.log(showResults, " Cart toggle");
    showResults == true ? setShowResults(false) : setShowResults(true);
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img
            alt="Uber Eats Home"
            role="img"
            src={"assets/logo.svg"}
            width="146"
            height="24"
          ></img>
        </div>
        <div className="delivery hm">
          <div className="deliveryType">
            <div className="deliveryOpt hbtn">Delivery</div>
            <div className="pickupOpt hbtn">Pickup</div>
          </div>
        </div>
        <div className="searchLocation hm">
          <h3>San Jose</h3>
        </div>
        <div className="search hm hbtn"></div>
        <div className="cart">
          <button className="cartContent" onClick={cartToggle}>
            Cart
          </button>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/signup/restaurant">R Sign Up</Link>
          </div>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/signin/restaurant">R Sign In</Link>
          </div>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/profile/restaurant">R Profile</Link>
          </div>
        </div>
        <div className="signIn">
          <div className="signinContent">
            <Link to="/profile/customer">Profile</Link>
          </div>
        </div>
      </div>
      {showResults ? <Cart close={cartToggle} /> : null}
    </header>
  );
};

export default Header;
