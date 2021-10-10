import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [fullname, setFullname] = useState("");
  const [store, setStore] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [contact, setContact] = useState("");

  const [country, setCountry] = useState("");
  const [pin, setPin] = useState(0);
  return (
    <div>
      <div className="cl-logo" data-reactid="7">
        <div className="cl-logo2" data-reactid="8">
          <a href="/login/" data-reactid="9">
            <div data-reactid="10" className="cl-logo3">
              <img
                className="cl-logo4"
                src="https://d1a3f4spazzrp4.cloudfront.net/arch-frontend/1.1.1/d1a3f4spazzrp4.cloudfront.net/eats/eats-logo-1a01872c77.svg"
                data-reactid="12"
              />
            </div>
          </a>
        </div>
      </div>
      <div class="cs-main-menu">
        <div className="cs-main2">
          <div class="cs-main-heading">Update your store </div>
          <div class="cs-main-hidden"></div>
        </div>
        <div className="cl-spacer8"></div>
        <div className="cs-form">
          <form className="cs-form2" method="post">
            <div className="menu-flex">
              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Item{" "}
                </label>

                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={fullname}
                    class="cs-input-box"
                    placeholder="Full name"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Description{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={store}
                    class="cs-input-box"
                    placeholder="Username"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setStore(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Calories{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="password"
                    value={password}
                    class="cs-input-box"
                    placeholder="Password"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Price{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="password"
                    value={rpassword}
                    class="cs-input-box"
                    placeholder="Password"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setRpassword(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Type{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    class="cs-input-box"
                    placeholder="Email"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Category{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="street"
                    name="street"
                    type="text"
                    value={street}
                    class="cs-input-box"
                    placeholder="City"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setStreet(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Ingredients{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={city}
                    class="cs-input-box"
                    placeholder="City"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Upload Image{" "}
                </label>
                <div className="menu-ok-btn">
                  <button className="cl-next-btn2">
                    <span className="cl-next-btn-label">Upload</span>
                    <i className="cl-next-btn-icon"></i>
                  </button>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  Add Dish
                </label>
                <div className="menu-ok-btn">
                  <button className="cl-next-btn2">
                    <span className="cl-next-btn-label">Add</span>
                    <i className="cl-next-btn-icon"></i>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Menu;
