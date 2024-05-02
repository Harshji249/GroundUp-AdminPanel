import React, { useState } from 'react';
import './SignUp.css';
import GroundUp from '../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png';
import Facebook from '../Assets/Facebook (1).png';
import Google from '../Assets/google.png';
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [name, setName] = useState('');


  // const handleSignUp = async () => {
  //   try {
  //     const response = await fetch('https://your-backend-url/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     if (response.ok) {
  //       // Sign up successful
  //       console.log('Sign up successful');
  //       // Redirect to another page or perform any desired action
  //     } else {
  //       // Handle error
  //       const data = await response.json();
  //       setError(data.message); // Assuming your backend returns an error message
  //     }
  //   } catch (error) {
  //     console.error('Error signing up:', error);
  //     setError('Error signing up. Please try again later.');
  //   }
  // };


  const handleSignUpWithNumber = async () => {
    navigate('/signUpOtp')
    try {
      const response = await fetch('https://your-backend-url/signup/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        // Sign up successful
        console.log('Sign up with number successful');
        // Redirect or perform any other action
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error('Error signing up with number:', error);
      setError('Error signing up with number. Please try again later.');
    }
  };

  // const handlePhoneNumberChange = (e) => {
  //   setPhoneNumber(e.target.value);
  // };



  const handleFacebookLogin = () => {
    console.log('Login with Facebook clicked');

  };

  const handleGoogleLogin = () => {
    console.log('Login with Google clicked');

  };

  const handleSignIn = () => {
    console.log('SignIN');
    navigate('/LogIn')

  };
  const handleSignUp = () => {
    console.log('SignUp');

  };





  return (
    <div>
      <div className="signup-using-mail-eoy">
        <div className="rectangle-76-nQP"></div>
        <img className="groundup-high-resolution-logo-transparent-3-KQK" src={GroundUp} alt="GroundUp Logo" />
        <div className="rectangle-13-dR1"></div>
        <p className="have-an-account-sign-in-8cf">
          <span className="have-an-account-sign-in-8cf-sub-0">
            Have an Account ?<br />
          </span>
          <button className="have-an-account-sign-in-8cf-sub-1" onClick={handleSignIn}>Sign in</button>
        </p>


        <p className="sign-up-E3R">Sign up</p>
        <div className="group-53-b2P">
          
          <input
            className="auto-group-uilp-dzf" // Apply the same class here
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="group-54-b2P">
          
          <input
            className="auto-group-uilp-dzf"
            placeholder="Enter Your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="group-55-hUj">
          
          <input
            className="auto-group-sphr-ySF"
            type="Enter Your New password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="group-56-YK1" onClick={handleSignUp}>Sign up</button>
        {error && <p className="error-message">{error}</p>}
        <p className="welcome-to-groundup-FPm">Welcome to GroundUp</p>
        
        
        <button className="signup-using-number-zVm" onClick={handleSignUpWithNumber} style={{ width: '45.1rem', height: '5.5rem', cursor: 'pointer', position: 'absolute', left: '49.5rem', top: '60rem', fontSize: '1.6rem', fontweight: '500', lineHeight: '1.5', color: ' #000000', fontFamily: 'Poppins   "Source Sans Pro"', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0.4rem 1.9rem rgba(119, 147, 65, 0.3000000119)', backgroundColor: 'fff', borderRadius: '1rem' }}>Signup using Number</button>
        <div className="group-216-gtP">
          <p className="or-continue-with-1vf">or continue with</p>
          <div>
            <button type="button" onClick={handleFacebookLogin} className="login-button-facebook">
              <img src={Facebook} alt="Facebook" style={{ width: '41 px', height: '50px', flexshrink: '0', display: ' flex', justifyContent: 'left', position: 'absolute', bottom: 10, right: 100, cursor: 'pointer' }} />
            </button>
            <button type="button" onClick={handleGoogleLogin} className="login-button-google">
              <img src={Google} style={{ flexshrink: 0, display: 'flex', justifycontent: '20px', position: 'absolute', bottom: '15px', width: '41px', cursor: 'pointer' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
