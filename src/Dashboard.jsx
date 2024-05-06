import React, { useState } from 'react';
import Sidebar from './Components/Dashboard/Sidebar';
import Home from './Components/Dashboard/Home';
import './App.css';

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className='main-container'>
    <div className='main-title'>
        <h3>DASHBOARD</h3>
    </div>

    <div className='main-cards'>
        <div className='card'>
            <div className='card-inner'>
                <h3>Total Earning</h3>
                <img src="src\images\icon1.png" alt="" className='icon' />
            </div>
            <h1>Rs 300</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Total Ground</h3>
                <img src="src\images\icon2.png" alt=""  />
            </div>
            <h1>12</h1>
        </div>
        <div className='card'>
            <div className='card-inner'>
                <h3>Total Booking</h3>
                <img src="src\images\icon3.png" alt="" />
            </div>
            <h1>33</h1>
        </div>
        
    </div>
    </main>
     {/* listing of all grounds*/ }
    </div>
  );
};

export default Dashboard;
