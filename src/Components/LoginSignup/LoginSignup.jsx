import React, { useState } from "react";
import "./LoginSignup.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import EyeImage from "../Assets/eye-1.png";
import GroundUp from "../Assets/groundup-high-resolution-logo-transparent-3-Zcs.png";
import Welcome from "../Assets/image-16.png";
import Facebook from "../Assets/Facebook (1).png";
import { TextField } from "@mui/material";
import Google from "../Assets/google.png";
import axios from "axios";
const LoginSignup = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...userDetails,
    };
    const response = await axios.post(
      "http://localhost:3000/api/auth-admin/login",
      payload
    );
    console.log("response", response);
    setUserDetails({
      email: "",
      password: "",
    });
    if (response.status === 200) navigate("/Dashboard");
  };

  const divStyle = {
    width: "100vw", // Adjust the width as needed
    height: "100vh", // Adjust the height as needed
    background: "linear-gradient(to right, white 50%, #FFD134 50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <>
      <div style={divStyle}>
        <div
          style={{
            width: "30%",
            height: "83%",
            backgroundColor: "white",
            borderRadius: 20,
            boxShadow: "0 0 10px 0px black",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <h1 style={{ fontWeight: "bold", color: "black" }}>
              Welcome to GroundUp
            </h1>
          </div>
          <div>
            <img
              src={Welcome}
              alt=""
              style={{ width: "117px", height: "89px" }}
            />
          </div>

          <div>
            <h5>Enter Your Email Address</h5>
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              name ='email'
              value ={userDetails.email}
              onChange={(e)=>handleChange(e)}
              sx={{ width: "400px" }}
            />
          </div>
          <div>
            <h5>Enter Your Password</h5>
            <TextField
              id="outlined-basic"
              label="Your Password"
              variant="outlined"
              name ='password'
              value ={userDetails.password}
              onChange={(e)=>handleChange(e)}
              sx={{ width: "400px" }}
            />
          </div>

          <div style={{ width: "88%" }}>
            <h5 style={{ color: "red", textAlign: "right", cursor: "pointer" }}>
              Forget Password
            </h5>
          </div>

          <div style={{ width: "88%", height: "45px" }}>
            <button
              style={{
                cursor: "pointer",
                borderRadius: 10,
                border: "none",
                width: "100%",
                height: "100%",
                fontSize: "18px",
                backgroundColor: "#0085FF",
                color: "white",
              }}
              onClick={handleSubmit}
            >
              Log In
            </button>
          </div>

          <div style={{ width: "88%", height: "45px", marginTop: 20 }}>
            <button
              style={{
                cursor: "pointer",
                borderRadius: 10,
                border: "1px solid #0085FF",
                width: "100%",
                height: "100%",
                fontSize: "18px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={handleSignUp}
            >
              Create An Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
