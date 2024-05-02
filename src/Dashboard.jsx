import React , {useState} from 'react'
import Header from './Components/Dashboard/Header'
import Sidebar from './Components/Dashboard/Sidebar'
import Home from './Components/Dashboard/Home'
import './App.css'


const Dashboard = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }
  
    return (
      <div className='grid-container'>
        <Header />
        <Sidebar/>
        <Home />
        
      </div>
    )
  }

export default Dashboard;