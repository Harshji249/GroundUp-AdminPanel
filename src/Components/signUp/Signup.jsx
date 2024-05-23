import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Welcome from "../Assets/image-16.png";
import { TextField,  Snackbar, Alert, } from "@mui/material";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [snackopen, setSnackopen] = useState(false);
  const vertical = "top"
  const horizontal = "right"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
    };
    await axios.post(
      "https://groundup-server.onrender.com/api/auth-admin/registeradmin",
      payload
    ).then((res)=>{
      if(res.status === 200) {
        navigate('/dashboard')
        localStorage.setItem('admin',JSON.stringify(res.data.admin))
        localStorage.setItem('authToken',res.data.authToken)
      }
    }).catch((err)=>{
      setSnackopen(true);
    })
    setFormData({
      name: "",
      email: "",
      password: "",
    });
    navigate("/Dashboard");
  };

  const handleLogin = () => {
    navigate("/login");
  };
  const handleClose = () => {
    setSnackopen(false);
  }

  const divStyle = {
    width: "100vw", 
    height: "100vh", 
    background: "linear-gradient(to right, white 50%, #FFD134 50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
     <div>
     <Snackbar anchorOrigin={{ vertical, horizontal }} open={snackopen} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ fontFamily: "Jost", width: '100%' }}>
              Internal Server Error
            </Alert>
          </Snackbar>
    </div>
      <div style={divStyle}>
          <div
            style={{
              width: "30%",
              height: "95%",
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
              <h5>Enter Your Name</h5>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="outlined"
                sx={{ width: "400px" }}
                name ='name'
                value ={formData.name}
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div>
              <h5>Enter Your Email Address</h5>
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                sx={{ width: "400px" }}
                name ='email'
                value ={formData.email}
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div>
              <h5>Enter Your Password</h5>
              <TextField
                id="outlined-basic"
                label="Your Password"
                variant="outlined"
                sx={{ width: "400px" }}
                name ='password'
                value ={formData.password}
                onChange={(e)=>handleChange(e)}
              />
            </div>
            <div style={{ width: "88%", height: "45px", marginTop: 20 }}>
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
                SignUp
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
                onClick={handleLogin}
              >
                Login to existing account
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default SignUp;
