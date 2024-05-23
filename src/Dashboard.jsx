import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Dashboard/Sidebar";
import Home from "./Components/Dashboard/Home";
import "./App.css";
import { Card, Grid, Box } from "@mui/material";
import axios from "axios";

const Dashboard = () => {
  const [grounds, setGrounds] = useState([]);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  function extractTimeFromDate(dateStr) {
    const date = new Date(dateStr);
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes} ${ampm}`;
  }
  
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const getBookedGrounds = async () => {
    await axios
      .get("https://groundup-server.onrender.com/api/ground/bookedground", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setGrounds(res.data.grounds);
          console.log("res.data.grounds", res.data.grounds);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getBookedGrounds();
  }, []);
  return (
    <div className="grid-container">
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <main className="main-container">
        <div className="main-title">
          <h3>DASHBOARD</h3>
        </div>

        <div className="main-cards">
          <Card className="card">
            <div className="card-inner">
              <h3>Total Earning</h3>
              <img src="src\images\icon1.png" alt="" className="icon" />
            </div>
            <h1>Rs 300</h1>
          </Card>
          <Card className="card">
            <div className="card-inner">
              <h3>Total Ground</h3>
              <img src="src\images\icon2.png" alt="" />
            </div>
            <h1>12</h1>
          </Card>
          <Card className="card">
            <div className="card-inner">
              <h3>Total Booking</h3>
              <img src="src\images\icon3.png" alt="" />
            </div>
            <h1>33</h1>
          </Card>
        </div>
        {/* <Grid container spacing={2} style={{ height: '100%', width: '96%' }}>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
      <Grid item xs={4}>
        <Card style={{ height: '250px', backgroundColor: 'red' }}></Card>
      </Grid>
    </Grid> */}

        <div style={{ height: "100%", width: "95%" }}>
          {
            grounds.map((ground)=>{
              return (
                <Card
                style={{
                  width: "100%",
                  height: "220px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Box style={{ width: "40%", height: "80%" }}>
                  <img
                    src={ground.image}
                    alt=""
                    style={{ height: "100%", width: "100%", borderRadius:10 }}
                  />
                </Box>
                <Box
                  style={{ width: "20%", height: "80%",display:'flex',flexDirection:'column', justifyContent:'space-evenly' }}
                >
                  <h3>Booked Ground Name</h3>
                  <h3>Booked By</h3>
                  <h3>Booking Timings</h3>
                </Box>
                <Box
                  style={{ width: "30%", height: "80%", display:'flex',flexDirection:'column', justifyContent:'space-evenly'  }}
                >
                  <h3 style={{color:"#0085FF"}}>{ground.groundName}</h3>
                  <h3 style={{color:"#0085FF"}}>{ground.userName}</h3>
                  <h3 style={{color:"#0085FF"}}>{extractTimeFromDate(ground.timeSlot[0].startTime)} - {extractTimeFromDate(ground.timeSlot[0].endTime)} </h3>
                </Box>
              </Card>
              )
            })
          }
          {/* <Card
            style={{
              width: "100%",
              height: "250px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Box style={{ width: "40%", height: "80%" }}>
              <img
                src={ground.image}
                alt=""
                style={{ height: "60px", width: "70px" }}
              />
            </Box>
            <Box
              style={{ width: "20%", height: "80%", backgroundColor: "red" }}
            ></Box>
            <Box
              style={{ width: "30%", height: "80%", backgroundColor: "red" }}
            ></Box>
          </Card> */}
        </div>
      </main>
      {/* listing of all grounds*/}
    </div>
  );
};

export default Dashboard;
