import React, { useState } from "react";

const ProfileMain = () => {

    const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [about, setAbout] = useState("");
  const [nickname, setNickname] = useState("");
  const [country, setCountry ] = useState(""); 
  const [pin, setPin ] = useState(0); 
  const [dob, setDob ] = useState(0); 

  return (
    <div>
      <div className="cust-profile-frame">
        <div className="cust-profile-frame2">
          <div className="cust-profile-contents">
            <div className="cust-pro-title">
              <div
                aria-label="Rugved Manoorkar"
                role="img"
                data-baseweb="avatar"
                className="cust-pro-avatar"
              >
                <div className="cust-pro-avatar-letters">RM</div>
              </div>
            </div>
            This is second
            
          </div>
          <div className="cl-spacer8"></div>
          
          {/* <div data-baseweb="input" class="cp-text">
            <div data-baseweb="base-input" class="cp-text2">
              <input
                aria-invalid="false"
                aria-required="false"
                autocomplete="on"
                name=""
                placeholder=""
                type="text"
                class="cp-text-input"
                value=""
              />
            </div>
          </div> */}
          <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Full name (required){" "}
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
                  User name (required){" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={username}
                    class="cs-input-box"
                    placeholder="Username"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                        setUsername(e.target.value);
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
                  Password (required){" "}
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
                  Repeat password (required){" "}
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
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;
                  {password == rpassword ? "" : "Please re-enter same password  "}
                  </div>
                </div>
              </div>

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Email{" "}
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
                  Street{" "}
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
                  City{" "}
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
                  State{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={state}
                    class="cs-input-box"
                    placeholder="State"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                        setState(e.target.value);
                      }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              {/* Country */}
              
              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Country{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={country}
                    class="cs-input-box"
                    placeholder="Full name"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>

              {/* Pin */}

              <div class="cs-input-text">
                <label id="cs-input-label" class="cs-input-label" for="Name">
                  {" "}
                  Pin{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="pincode"
                    name="pincode"
                    type="number"
                    value={pin}
                    class="cs-input-box"
                    placeholder=""
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    min="10000"
                    onChange={(e) => {
                        setPin(e.target.value);
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
                  About{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={about}
                    class="cs-input-box"
                    placeholder="Full name"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                        setAbout(e.target.value);
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
                  Nickname{" "}
                </label>
                <div class="cs-input">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={nickname}
                    class="cs-input-box"
                    placeholder="Full name"
                    aria-describedby="error-caption-cs-input-label form-title cs-input-label"
                    aria-required="true"
                    autocorrect="on"
                    autocapitalize="words"
                    placeholdermsgkey="m2.first_name"
                    autofocus="on"
                    onChange={(e) => {
                        setNickname(e.target.value);
                      }}
                  />
                  <div class="cs-input-icon"></div>
                </div>
                <div role="alert" aria-live="assertive" aria-atomic="false">
                  <div class="cs-input-alert">&nbsp;</div>
                </div>
              </div>
                      </div>
                      <div className="cl-next-btn">
                <button className="cl-next-btn2" >
                  <span className="cl-next-btn-label">Update</span>
                  <i className="cl-next-btn-icon"></i>
                </button>
              </div>
        </div>
      </div>
    
  );
};

export default ProfileMain;
