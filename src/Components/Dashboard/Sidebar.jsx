import React from 'react'
import { Link } from 'react-router-dom';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { IoIosAddCircle } from "react-icons/io";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
               <img src="src\images\logo.png" alt="" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/AddGround">
            <IoIosAddCircle className='icon' /> Add Ground 
          </Link>
        </li>
        <hr />
        <li className='sidebar-list-item'>
          <Link to="/Dashboard/Settings">
            <BsFillGearFill className='icon'/> Setting
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar