import React, {useState} from "react";
import Axios from 'axios'

const CustomerSignup = () => {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phonenumberReg, setPhonenumberReg] = useState("");
  const [nameReg, setNameReg] = useState("");
  const [emailIDReg, setEmailIdReg] = useState("");
  const [dobReg, setDobReg] = useState("");
  const [cityReg, setCityReg] = useState("");
  const [stateReg, setStateReg] = useState("");
  const [countryReg, setCountryReg] = useState("");
  const [nickNameReg, setNickNameReg] = useState("");
  const [aboutReg, setAboutReg] = useState("");
  const [pinReg, setPinReg] = useState(0);
  
  const register = () => {
    console.log(usernameReg , passwordReg, phonenumberReg)
    Axios.post("http://localhost:5000/api/v1/customer/signup/",{
      username: usernameReg,
      password: passwordReg,
      phonenumber: phonenumberReg,
      name : nameReg,
      emailid : emailIDReg,
      dateofbirth : dobReg,
      city : cityReg,
      state : stateReg,
      country : countryReg,
      nickname : nickNameReg,
      about : aboutReg,
      pin: pinReg
    }).then((response)=>{
      console.log(response)
    })
  }

  return (
    <div className='customer_signup'>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input className='signup_input'
          type="text"
          onChange={(e)=>{
            setUsernameReg(e.target.value);
          }}
        />
        
        <label>Password</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setPasswordReg(e.target.value)
          }}
        />
        <label>Phone Number</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setPhonenumberReg(e.target.value)
          }}
        />
        <button className='register_button' onClick={register}> Register </button>
      </div>
          <br />
          <label>Name</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setNameReg(e.target.value)
          }}
        />
        <br />
        <label>Email ID</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setEmailIdReg(e.target.value)
          }}
        />
        <br />
        <label>DOB</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setDobReg(e.target.value)
          }}
        />
        <br />
        <label>City</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setCityReg(e.target.value)
          }}
        />
        <br />

        <label>State</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setStateReg(e.target.value)
          }}
        />
        <br />

        <label>Country</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setCountryReg(e.target.value)
          }}
        />
        <br />

        <label>Nickname</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setNickNameReg(e.target.value)
          }}
        />
        <br />
        <label>About</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setAboutReg(e.target.value)
          }}
        />
        <br />

        <label>Pin</label>
        <input
          type="text"
          className='signup_input'
          onChange={(e) =>{
            setPinReg(e.target.value)
          }}
        />
        <br />

      <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          className='signup_input'
        />
        <input
          type="password"
          placeholder="Password..."
          className='signup_input'
        />
        <button className='login_button'> Login </button>
      </div>

      <h1></h1>


    </div>
  );
};

export default CustomerSignup;
