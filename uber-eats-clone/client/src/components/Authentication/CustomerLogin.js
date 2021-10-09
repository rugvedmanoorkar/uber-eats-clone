import React, { useState } from "react";
import { getUser } from "../../actions/userAction";
import {connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const CustomerLogin = ({getUser, user}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email , password, " EP" );
    getUser(email, password);
    console.log(user, " User in cust login")
  }
  if(user.user.data.length > 0){
    console.log("Go to main page");
    
  }
  console.log(email);
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
      <div className="cl-stage-wrapper" id="app-body" data-reactid="13">
        <div className="cl-stage-wrapper2">
          <div>
            <form className="cl-form" onSubmit={onSubmit}>
              <h4 className="cl-label" id="input-title">
                Welcome back
              </h4>
              <div className="cl-spacer8"></div>
              <label className="cl-label2" id="input-label" for="useridInput">
                Sign in with your email address.
              </label>
              <div className="cl-spacer24">
                <div>
                  <div className="cl-input">
                    <input
                      className="cl-input-area"
                      id="useridInput"
                      autoCorrect="off"
                      autoCapitalize="off"
                      name="textInputValue"
                      value={email}
                      className="text-input"
                      placeholder="Email "
                      aria-required="true"
                      aria-invalid="true"
                      aria-describedby="error-caption input-title"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="cl-error-caption" id="error-caption">
                  <div className="cl-error-caption-text"></div>
                </div>
              </div>

              <label className="cl-label2" id="input-label" for="useridInput">
                Sign in with your password.
              </label>
              <div className="cl-spacer24">
                <div>
                  <div className="cl-input">
                    <input
                      className="cl-input-area"
                      id="useridInput"
                      autoCorrect="off"
                      autoCapitalize="off"
                      name="textInputValue"
                      value={password}
                      className="text-input"
                      placeholder="Password "
                      aria-required="true"
                      aria-invalid="true"
                      aria-describedby="error-caption input-title"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="cl-error-caption" id="error-caption">
                  <div className="cl-error-caption-text">
                  {user.user.data.length == 0 ? <div>{}</div> : <Redirect to='/' />}
                  </div>
                </div>
              </div>

              <div className="cl-next-btn">
                <button className="cl-next-btn2" >
                  <span className="cl-next-btn-label">Next</span>
                  <i className="cl-next-btn-icon"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="cl-small-push" id="cl-signup-link">
            <p className="cl-signup-label">
              New to Uber?{" "}
              <a
                class="cl-signup-link"
                href="/login/?uber_client_name=eatsWebSignUp&amp;source=auth&amp;next_url=https%3A%2F%2Fwww.ubereats.com%2Flogin-redirect%2F%3Fcampaign%3Dsignin_universal_link"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.user)
  return {
    user: state.user,
  }
  
}
export default connect(mapStateToProps, { getUser })(CustomerLogin);
