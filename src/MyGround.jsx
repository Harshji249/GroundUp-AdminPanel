import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Dashboard/Sidebar";
import { TextField, Box, Typography, Button } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import Upload from "./Components/Assets/upload.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputAdornment from "@mui/material/InputAdornment";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

const MyGround = () => {

    const [myGrounds,setMyGrounds]= useState([])
  const handleChange = (e) => {
    setGroundDetails({ ...groundDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchGrounds = async () => {
      await axios
        .get("https://groundup-server.onrender.com/api/ground/mygrounds", {
          headers: {
            "auth-token": localStorage.getItem("authToken"),
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            //   navigate('/dashboard')
            setMyGrounds(res.data.grounds)
            console.log("LISTED SUCCESSFULLY");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchGrounds()
  }, []);
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-container" style={{ color: "black" }}>
      
      </main>
    </div>
  );
};

export default MyGround;
