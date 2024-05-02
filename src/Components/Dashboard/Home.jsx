import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import Header from './Header';
import Sidebar from './Sidebar';
function Home() {

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
     

  return (

    <main className='main-container'>
      
        

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

    </main>
  )
}

export default Home;