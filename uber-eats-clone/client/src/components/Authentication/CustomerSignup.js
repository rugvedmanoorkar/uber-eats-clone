import React, {useState} from "react";
import Axios from 'axios'

const CustomerSignup = () => {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [phonenumberReg, setPhonenumberReg] = useState("");

  const register = () => {
    console.log(usernameReg , passwordReg, phonenumberReg)
    Axios.post("http://localhost:5000/",{
      username: usernameReg,
      password: passwordReg,
      phonenumber: phonenumberReg
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
