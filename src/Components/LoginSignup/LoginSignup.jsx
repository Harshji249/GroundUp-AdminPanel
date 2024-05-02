import React from 'react'
import './LoginSignup.css'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

// export default function Login({ userDetails, setUserDetails }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const loginUserState = useSelector((state) => state.loginUserState);
//   const loginUserState = useSelector((state) => state.loginUserState);
//   // console.log("STATE", loginUserState?.userDetails[0]?.authToken)
//   // console.log("STATE", loginUserState)

//   useEffect(() => {
//     if (loginUserState.loginStatus === "success") {
//       console.log("Success login")
//       const token = loginUserState?.userDetails[0]?.authToken;

//       localStorage.setItem("authtoken", token)
//       navigate('/home');

//     }
//   }, 
//   [loginUserState.loginStatus, navigate]);
//   const handleChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
//   }

//   const submitData = async (e) => {
//     e.preventDefault();

//     // localStorage.setItem("TEST", "hello")
//     const user = {
//       ...userDetails
//     }
//     dispatch(login(user));

//     setUserDetails({
//       email: "",
//       password: "",
//     });

//   }




import EyeImage from '../Assets/eye-1.png';
import GroundUp from '../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png';
import Welcome from  '../Assets/image-16.png';
 import Facebook from '../Assets/Facebook (1).png';
 import Google from '../Assets/google.png';



const LoginSignup = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    console.log('hello')
  };

  const handleFacebookLogin = () => {
    console.log('hello')
  
  };
  const handleSignUp = () => {
    console.log('hello')
    navigate('/signUp')
   

  };
  const LoginWithNumber = () => {
    console.log('hello')
    navigate('/otp')

  };


  return (
    <>
   
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Poppins%3A300%2C400%2C500"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A300%2C400%2C500"
/>
<link rel="stylesheet" href="./styles/group-240.css" />

<form onSubmit={""}>
   <div>
   <div class="group-240-66T">
  <div class="login-using-mail-dcB">
    <p class="or-As1">OR</p>
    <div class="rectangle-76-sFd">
    </div>
    <div class="rectangle-13-of5">
      <div class="rectangle-13-k4X">
      </div>
    </div>
    <div class="group-49-TzX">
      <p class="welcome-to-groundup-yxs">Welcome to GroundUp</p>
      <p class="no-account-sign-up-Uud">
        <span class="no-account-sign-up-Uud-sub-0">
        No Account ?
        <br/>
        
        </span>
        <button  onClick={handleSignUp} class="no-account-sign-up-Uud-sub-1" style={{display:'flex',position:'absolute', cursor:'pointer'}}>Sign up</button>
      </p>
    </div>
    <div class="group-54-qQj">
      <p class="enter-your-username-or-email-address-vwy">Enter your email address</p>
      <input class="auto-group-uobv-FjM" placeholder='email address'/>
      {/* value={userDetails.email}
                    onChange={(e) => handleChange(e)}
                    required   */}
    </div>
    <div class="group-215-v4o">
      <div class="group-55-RXM">
        <p class="enter-your-password-mr7">Enter your Password</p>
        <div style={{display:'flex'}}>
          <input class="auto-group-uenb-uSX" type='password' placeholder='Password' style={{}}
            // value={userDetails.email}
            // onChange={(e) => handleChange(e)}
            // required 
            />
          <img class="eye-1-ewq" src={EyeImage} style={{position:'absolute', right:5, bottom:55 ,objectfit:'contain',height:'18px', fontfamily: 'Poppins, "Source Sans Pro"',fontsize: '1.4rem',fontweight: '300'}}/>
        </div>
      </div>
      <p class="forgot-password-97u">Forgot Password</p>
    </div>
    <button class="group-56-gNj">Sign in</button>
    <img class="groundup-high-resolution-logo-transparent-3-6BZ" src={GroundUp}/>
    <div class="rectangle-77-bPD">
    </div>

    <button  onClick={LoginWithNumber} class="login-using-number-gfZ"   component={RouterLink} to={"/LoginPhnNo"}   style={{width: '45.1rem', height: '5.5rem', cursor: 'pointer',position: 'absolute',left: '49.5rem',top: '74.4rem',fontSize:'1.6rem',fontweight: '500',lineHeight: '1.5', color: ' #000000',fontFamily: 'Poppins   "Source Sans Pro"',whiteSpace: 'nowrap', display: 'flex',alignItems: 'center',justifyContent: 'center',boxShadow: '0 0.4rem 1.9rem rgba(119, 147, 65, 0.3000000119)',backgroundColor: 'fff', borderRadius:'1rem'}}>
      LogIn with Number</button>
    <img class="image-16-aF9" src={Welcome} style={{top:'23rem'}}/>
  
    <div class="group-217-hqZ">
      <p class="or-continue-with-SHM">or continue with</p>
      {/* <img class="group-13-Ldd" src={FGA}/> */}
      
      <div>
      <div>
        <button type='submit' onClick={handleFacebookLogin} class="login-button-facebook">
          <img src={Facebook} style={{ width: '41 px',height: '50px',flexshrink: '0' ,display :' flex' ,justifyContent:'left',position:'absolute' ,bottom:10,right:100}} />
          
        </button>
      </div>
      
        <button type='submit' onClick={handleGoogleLogin} class="login-button-google">
          <img src={Google} style={{flexshrink: 0 ,display: 'flex',justifycontent:'20px' , position: 'absolute',bottom: '15px',width: '41px',   }}  />
      
        </button>
      </div>
         
    </div>
    <div class="frame-15-UUw">
    </div>
  </div>
</div>
</div>
</form>
</>
  )
}

export default LoginSignup
