// import React from "react";
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import GroundUp from '../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png';


<div>
  <meta charSet="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>signup using number</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A500" />
  <link rel="stylesheet" href="./styles/signup-using-number.css" />
</div>


const SignUpOtp = () => {
  const navigate = useNavigate();


  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };


  const handleContinue = () => {
    navigate ('/SignUp4otp')
    console.log(`Sending OTP to ${phoneNumber}`);
    

    setOtpSent(true);
    
    
  };
  const handleSignIn=()=>{
    navigate('/LogIn')
    console.log('signIn')
  }
 











  return (
    <div>
      <div className="signup-using-number-Fnw">
        <p className="or-o3m">OR</p>
        <div className="rectangle-76-h99"></div>
        <div className="rectangle-13-ScX"></div>
       
        <div className="group-54-YfZ">
          {" "}
          <label className="enter-your-username-or-email-address-59h"> Enter your phone number </label>
          <div className="continue">
          <input
          type="tel"
          className="auto-group-rsur-QBy"
          id="phoneNumberInput"
          name="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
         onChange={handlePhoneNumberChange}
        />
        </div>
        </div>
       
        <img
          className="groundup-high-resolution-logo-transparent-3-es1"
          src={GroundUp}/>
        <div className="rectangle-16-mgj"></div>
        <button  className="continue-uY3" onClick={handleContinue}>Continue</button>
        {otpSent && <p className="an-otp-will-be-generated-by-clicking-on-continue-pQ7" style={{ color: 'light-black' }}>An OTP has been sent to {phoneNumber}</p>}
        <p className="have-an-account-sign-in-7e7">
          <span className="have-an-account-sign-in-7e7-sub-0">
            Have an Account ?
            <br />
          </span>
          <button className="have-an-account-sign-in-7e7-sub-1" onClick={handleSignIn}>Sign in</button>

          
        </p>
        <p className="sign-up-4Ss">Sign up</p>
        <p className="welcome-to-groundup-ZuR">Welcome to GroundUp</p>
      </div>
    </div>
  );
};

export default SignUpOtp;
