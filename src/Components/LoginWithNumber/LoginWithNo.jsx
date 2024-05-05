import React, { useState } from "react";
// import { Navigate, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Link as RouterLink, useNavigate } from "react-router-dom";

import Welcome from "../Assets/image-16.png";
import GroundUp from "../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png";

const LoginWithNo = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleContinueClick = () => {
    console.log(`Sending OTP to ${phoneNumber}`);
    navigate("/4otp");

    //  OTP succesfully gya
    setOtpSent(true);
  };

  const handleSignUpClick = () => {
    console.log("Sign up button clicked");
    navigate("/signup");
  };

  return (
    <div className="login-using-number-8f9">
      <p className="or-54b">OR</p>
      <div className="rectangle-76-aGF"></div>
      <div className="rectangle-13-v5D"></div>
      <div className="group-49-Rnf">
        <p className="welcome-to-groundup-mLj">Welcome to GroundUp</p>
        <p className="no-account-sign-up-gib" style={{ marginLeft: "60px" }}>
          <span className="no-account-sign-up-gib-sub-0">
            No Account ?<br />
          </span>
          <button
            className="no-account-sign-up-gib-sub-1"
            onClick={handleSignUpClick}
          >
            Sign up
          </button>
        </p>
      </div>
      <div className="group-54-ogj">
        <label className="enter-your-username-or-email-address-9Eo">
          Enter your phone number
        </label>
        <input
          type="tel"
          className="auto-group-rsm1-sAo"
          id="phoneNumberInput"
          name="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <img
        className="groundup-high-resolution-logo-transparent-3-wgT"
        src={GroundUp}
        alt=""
      />
      <div className="rectangle-16-Teo"></div>
      <button className="continue-PHZ" onClick={handleContinueClick}>
        Continue
      </button>

      {otpSent && (
        <p className="description-text" style={{ color: "light-black" }}>
          An OTP has been sent to {phoneNumber}
        </p>
      )}

      <img className="image-15-JJ3" src={Welcome} alt="Welcome Image" />
    </div>
  );
};

export default LoginWithNo;
