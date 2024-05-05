import React, { useState } from 'react';
import WelcomeImage from '../Assets/image-16.png';
import GroundUpLogo from '../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const LoginOTP = () => {
  const navigate = useNavigate()

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

    const handleSignUp = () => {
        console.log('Sign up clicked');
        navigate('/signup')
    };

    const handleSignIn = () => {
        console.log('Sign in clicked');

    };

    const requestOtpAgain = () => {
      
        setOtp(new Array(4).fill(""));
    };


    return (
        <div className="login-container">
            <div className="login-form">
                <p className="or-text">OR</p>
                <p className="sign-in-text">Sign in</p>
                <div className="yellow-background"></div>
                <div className="white-background"></div>
                <div className="welcome-message">
                    <p className="welcome-heading">Welcome to GroundUp</p>
                    <p className="signup-message">
                        <span className="no-account-message">No Account ?<br /></span>
                        <button type='button' className="signup-link" onClick={handleSignUp}>Sign up</button>
                    </p>
                </div>
                <div className="otp-message">Enter your OTP</div>
                <div className="blue-box"></div>
                <button type='button' className="signin-button" onClick={handleSignIn}>Sign in</button>
                <img className="logo" src={GroundUpLogo} alt="GroundUp Logo" />
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
                <button type='button' className="otp-again" onClick={requestOtpAgain}>Request OTP again</button>              
                  <img className="welcome-image" src={WelcomeImage} alt="Image" />
            </div>
        </div>
    );
}

export default LoginOTP;
