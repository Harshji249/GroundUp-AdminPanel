import React , {useState} from 'react'
 import { Avatar,Typography } from '@mui/material';
 import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
 import image from '../../images/logo.png'
 import AddIcon from '@mui/icons-material/Add';
 import Divider from '@mui/material/Divider';
 import { IoIosAddCircle } from "react-icons/io";
 import { Link } from 'react-router-dom';

function Sidebar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  
  return (
<>
<div>
        <div style={{width:"100vw"}}>
            <div style={{width:"100%", marginTop:40, marginLeft:40,marginBottom:20}}>
               <img src={image} alt="" />
            </div>
        </div>
<Divider/>
<div style={{ height:'100vh', width:"20vw",borderRight: '1px solid #E0E0E0' }}>
<div style={{height:'100px',width:'99%', display:"flex", justifyContent:'space-evenly', alignItems:'center'}}>
    <Avatar style={{height:'60px', width:"60px"}}>H</Avatar>
    <Typography fontWeight='bold' color='black'>Name</Typography>
</div>

<div style={{height:'100px',width:'99%', display:"flex", justifyContent:'space-evenly', alignItems:'center'}}>
    <DashboardOutlinedIcon sx={{fontSize:"3rem", cursor:'pointer'}}/>
    <Typography sx={{fontSize:"1.5rem",cursor:'pointer'}} color='black'component={Link} to="/Dashboard" onClick = {handleClick}style={{ color: clicked ? 'purple' : 'grey', cursor: 'pointer' }}>Dashboard</Typography>
</div>

<div style={{height:'100px',width:'99%', display:"flex", justifyContent:'space-evenly', alignItems:'center'}}>
    <AddIcon sx={{fontSize:"3rem",cursor:'pointer'}}/>
    <Typography sx={{fontSize:"1.5rem",cursor:'pointer'}} color='black' component={Link} to="/AddGround"  onClick = {handleClick}style={{ color: clicked ? 'grey' : 'purple', cursor: 'pointer' }}>Add Ground</Typography>
</div>
</div>
        {/* <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
            <a href="">
            <BsGrid1X2Fill className='icon'/> Dashboard
            </a>
            </li>
            <li className='sidebar-list-item'>
            <Link to='addground'>
            <IoIosAddCircle className='icon' /> Add Ground 
            </Link>
            </li>
            <hr />
            <li className='sidebar-list-item'>
            <a href="">
            <BsFillGearFill className='icon'/> Setting
            </a>
            </li>
        </ul> */}
        </div>
</>
  )
}

export default Sidebar