import React, { useState } from "react";
import Sidebar from "./Components/Dashboard/Sidebar";
import { TextField, Box, Typography } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import Upload from "./Components/Assets/upload.png";

const AddGround = () => {
  const [groundDetails, setGroundDetails] = useState({
    name: "",
    description: "",
    address: "",
    timeSlot: {},
    image: "",
  });
  const [timeSlots, setTimeSlots] = useState([
    { startTime: "", endTime: "", price: "" },
  ]);

  const handleInputChange = (index, name, value) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index] = {
      ...updatedTimeSlots[index],
      [name]: value
    };
    setTimeSlots(updatedTimeSlots);
  };

  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, { startTime: '', endTime: '', price: '' }]);
  };

  const handleRemoveTimeSlot = (index) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots.splice(index, 1);
    setTimeSlots(updatedTimeSlots);
  };

  const [file, setFile] = useState({});
  const handleBrowseClick = () => {
    // Trigger click on the hidden file input element
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    console.log("Selected file:", file);
    // Handle the selected file as needed
  };

  const handleChange = (e) => {
    setGroundDetails({ ...groundDetails, [e.target.name]: e.target.value });
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 90%;
  `
  );
  return (
    <div className="grid-container">
      <Sidebar />
      <main className="main-container" style={{ color: "black" }}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "65%" }}
        >
          <h1 style={{ color: "#0085FF" }}>ADD A NEW GROUND</h1>
        </div>
        <div style={{ height: "100vh", width: "100vw", display: "flex" }}>
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
              <Textarea
                aria-label="minimum height"
                minRows={8}
                name="address"
                value={groundDetails.address}
                onChange={(e) => handleChange(e)}
                placeholder="Ground Address"
              />
            </div>
            <div>
              <h5>Description </h5>
              <Textarea
                aria-label="minimum height"
                minRows={12}
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
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </Box>
              <Box>
                <Typography>Supported formates: JPEG, PNG, JPG</Typography>
              </Box>
            </Box>

            <Box
      sx={{
        border: "2px solid #000",
        width: "55%",
        height: "30%",
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
        <h3>From</h3>
        <h3>To</h3>
        <h3>Price</h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {timeSlots.map((timeSlot, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "33%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <TextField
              name="startTime"
              value={timeSlot.startTime}
              onChange={(e) =>
                handleInputChange(index, e.target.name, e.target.value)
              }
              sx={{ width: "100px" }}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              name="endTime"
              value={timeSlot.endTime}
              onChange={(e) =>
                handleInputChange(index, e.target.name, e.target.value)
              }
              sx={{ width: "100px" }}
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              name="price"
              value={timeSlot.price}
              onChange={(e) =>
                handleInputChange(index, e.target.name, e.target.value)
              }
              sx={{ width: "100px" }}
              id="outlined-basic"
              variant="outlined"
            />
            <button onClick={() => handleRemoveTimeSlot(index)}>Remove</button>
          </Box>
        ))}
      </div>
      <button onClick={handleAddTimeSlot}>Add Time Slot</button>
    </Box>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddGround;
