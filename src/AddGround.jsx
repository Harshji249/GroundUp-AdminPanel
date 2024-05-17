import React, { useState } from "react";
import Sidebar from "./Components/Dashboard/Sidebar";
import { TextField, Box, Typography, Button } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import Upload from "./Components/Assets/upload.png";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputAdornment from '@mui/material/InputAdornment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


const AddGround = () => {
  const [groundDetails, setGroundDetails] = useState({
    name: "",
    description: "",
    address: "",
  });
  const [timeSlots, setTimeSlots] = useState([
    { startTime: null, endTime: null, price: "" },
  ]);

  const handleInputChange = (index, name, value) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index] = {
      ...updatedTimeSlots[index],
      [name]: value,
    };
    setTimeSlots(updatedTimeSlots);
  };

  const handleAddTimeSlot = () => {
    if (timeSlots.length === 3) return;
    setTimeSlots([...timeSlots, { startTime: null, endTime: null, price: "" }]);
  };

  const handleRemoveTimeSlot = (index) => {
    if (timeSlots.length === 1) return;
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  const [file, setFile] = useState(null);
  const handleBrowseClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    console.log("selected file", file);
    if (file) {
        setFile(file);
    }
};

  const handleChange = (e) => {
    setGroundDetails({ ...groundDetails, [e.target.name]: e.target.value });
  };
const handleSubmit= async(e)=>{

  e.preventDefault();
  const formData1 = new FormData()
  formData1.append('image', file)
  formData1.append('timeSlot',JSON.stringify(timeSlots))
  formData1.append('name', groundDetails.name)
  formData1.append('address', groundDetails.address)
  formData1.append('description', groundDetails.description)
  console.log('selected files',file)
  const payload ={
    image :file,
    timeSlot:timeSlots,
    ...groundDetails,
  }
  console.log('payload',payload)
  await axios.post(
    "http://localhost:3000/api/ground/addground",
    formData1, {
      headers: {
          'auth-token': localStorage.getItem('authToken')
      }
    }
  ).then((res)=>{
    if(res.status === 200) {
      navigate('/dashboard')
    }
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-container" style={{ color: "black" }}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "65%" }}
        >
          <h1 style={{ color: "#0085FF" }}>ADD A NEW GROUND</h1>
        </div>
        <form onSubmit={handleSubmit} >
        <div style={{ height: "85vh", width: "100vw", display: "flex" }}>
          <div style={{ height: "100%", width: "40%" }}>
            <div>
              <h5>Add Ground Name </h5>
              <TextField
                id="outlined-basic"
                label="Ground Name"
                variant="outlined"
                name="name"
                value={groundDetails.name}
                onChange={(e) => handleChange(e)}
                sx={{ width: "90%" }}
              />
            </div>
            <div>
              <h5>Address</h5>
              <TextField
               sx={{ width: "90%"}}
                name="address"
                value={groundDetails.address}
                onChange={(e) => handleChange(e)}
                placeholder="Ground Address"
              />
            </div>
            <div>
              <h5>Description </h5>
              <TextField
               sx={{ width: "90%" }}
                name="description"
                value={groundDetails.description}
                onChange={(e) => handleChange(e)}
                placeholder="Ground Description"
              />
            </div>
          </div>
          <div style={{ height: "100%", width: "60%" }}>
            <Box
              sx={{
                border: "2px dotted #000",
                width: "55%",
                height: "30%",
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box sx={{ cursor: "pointer" }}>
                <img
                  src={Upload}
                  alt=""
                  style={{ height: "60px", width: "70px" }}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography>Drag & drop or &nbsp;</Typography>
                <Typography
                  sx={{
                    color: "#0085FF",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                  onClick={handleBrowseClick}
                >
                  BROWSE
                </Typography>
                <input
                  id="fileInput"
                  type="file"
                  name="file"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </Box>
              <Box>
                <Typography>Supported formates: JPEG, PNG, JPG</Typography>
              </Box>
            </Box>

            <Box
              sx={{
                border: "2px solid #000",
                width: "60%",
                height: "36%",
                marginTop: 5,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#91CAFF",
                  width: "100%",
                  height: "22%",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <h3  style={{ width: "130px" }}>From</h3>
                <h3 style={{ width: "130px" }}>To</h3>
                <h3 style={{ width: "130px" }}>Price</h3>
                <h3>Actions</h3>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "80%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {timeSlots?.map((timeSlot, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: "100%",
                      height: "33%",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      name="startTime"
                      value={timeSlot?.startTime} 
                      onChange={(e) =>
                        handleInputChange(index, 'startTime', e)
                      }
                      sx={{ width: "132px" }}
                      id="outlined-basic"
                      variant="outlined"
                      />
                      </LocalizationProvider>
                     <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      name="endTime"
                      value={timeSlot?.endTime}
                      onChange={(e) =>
                        handleInputChange(index, 'endTime', e)
                      }
                      sx={{ width: "132px" }}
                      id="outlined-basic"
                      variant="outlined"
                    />
                      </LocalizationProvider>
                    <TextField
                      name="price"
                      value={timeSlot?.price}
                      onChange={(e) =>
                        handleInputChange(index, e.target.name, e.target.value)
                      }
                      sx={{ width: "132px" }}
                      id="outlined-basic"
                      variant="outlined"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">Rs</InputAdornment>,
                        inputProps: {
                          type: 'number',
                          min: '0',
                        },
                      }}
                    />
                    <RemoveIcon onClick={() => handleRemoveTimeSlot(index)} />
                    <AddIcon onClick={handleAddTimeSlot} />
                  </Box>
                ))}
              </div>
            </Box>
            <Box sx={{display:'flex', justifyContent:"flex-end",width: "55%", height:"50px", marginTop:5}}>
      <Button  variant="contained" type="submit">Submit</Button>
      <Button variant="contained" color="error" sx={{ml:5}}>Cancel</Button>
    </Box>
          </div>
        </div>
        </form>
      </main>
    </div>
  );
};

export default AddGround;
