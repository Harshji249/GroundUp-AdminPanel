import React, { useState } from 'react';
import Header from './Components/Dashboard/Header';
import Sidebar from './Components/Dashboard/Sidebar';
import Home from './Components/Dashboard/Home';
import './App.css';

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div >
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <div className='main-content'>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>Total Earning</h3>
              <img src="src\images\icon1.png" alt="" />
            </div>
            <h1> Rs 3,500</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Total Ground</h3>
              <img src="src\images\icon2.png" alt="" />
            </div>
            <h1>15</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Total Booking</h3>
              <img src="src\images\icon3.png" alt="" />
            </div>
            <h1>12</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
