// import React from "react";
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';



import GroundUp from '../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png';

{<div>
  <meta charSet="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>signup using number</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter%3A500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins%3A400%2C500" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500" />
  <link rel="stylesheet" href="./styles/signup-using-number-hDy.css" />
</div> }






const SignUpdigit = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(new Array(4).fill(""));

  const handleChange = (event, index) => {
      const newOtp = [...otp];
      if (isNaN(event.target.value)) return false;
      newOtp[index] = event.target.value;
      setOtp(newOtp);
      // Move to the next input
      if (event.target.nextSibling && event.target.value !== "") {
          event.target.nextSibling.focus();
      }
  }



  const handleSignIn = () => {
    navigate('/LogIn')
    console.log('SignIn');
};

  const handleSignUp=()=>{
    console.log(Signup)
  };
  
  const handleRequestOTp = () => {
      
    setOtp(new Array(4).fill(""));
};






  return (
    <div className="signup-using-number-81M">
      <p className="or-4Qo">OR</p>
      <p className="sign-in-xm5">Sign in</p>
      <div className="rectangle-76-st3"></div>
      <div className="rectangle-13-cqd"></div>
      <div className="group-55-jfM">Enter your OTP</div>
      <div className="rectangle-18-qiP"></div>
      <button type="button" className="sign-up-MAw" onClick={handleSignUp}>Sign up</button>
      <img
        className="groundup-high-resolution-logo-transparent-3-4b9"
        src={GroundUp}
      />
      <div className="otp-input">
                    {otp.map((data, index) => (
                        <input
                            className="otp-digit"
                            type="text"
                            name="otp"
                            maxLength="1"
                            key={index}
                            value={data}
                            onChange={(e) => handleChange(e, index)}
                            onFocus={(e) => e.target.select()}
                        />
                    ))}
                </div>
      <button className="request-otp-again-RM9" on onClick={handleRequestOTp}>Request OTP again</button>
      <p className="have-an-account-sign-in-vHu">
        <span className="have-an-account-sign-in-vHu-sub-0">
          Have an Account ?
          <br />
        </span>
        <button className="have-an-account-sign-in-vHu-sub-1" onClick={handleSignIn}>Sign in</button>
      </p>
      <p className="sign-up-FUb">Sign up</p>
      <p className="welcome-to-groundup-a15">Welcome to GroundUp</p>
    </div>
  );
};

export default SignUpdigit;
