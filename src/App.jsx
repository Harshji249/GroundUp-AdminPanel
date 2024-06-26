import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginOTP from './Components/LoginOTP/LoginOTP';
import LoginSignup from './Components/LoginSignup/LoginSignup'
//  import { createBrowserRouter,RouterProvider,Router, Routes, Route } from 'react-router-dom';
 import LoginWithNo from './Components/LoginWithNumber/LoginWithNo';
import phoneNo from './Components/LoginWithNumber/LoginWithNo'
import SignUpOtp from './Components/SignUpOtp/SignUpOtp';
import Signup from './Components/signUp/Signup';
import SignUpdigit from './Components/SignUpdigit/SignUpdigit';
import Dashboard from './Dashboard';
import AddGround from './AddGround';
import MyGround from './MyGround';

function App() {
  return (
    <>
     { <Router>
        <Routes>
        <Route path='/' element={ <LoginSignup/>} />
        <Route path='/otp' element={ <LoginWithNo/>} />
        <Route path='/4otp' element={ <LoginOTP/>} />
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/signUpOtp' element={ <SignUpOtp/>} />
        <Route path='/login' element={ <LoginSignup/>} />
        <Route path='/SignUp4otp' element={ <SignUpdigit/>} />
        <Route path='/dashboard' element={ <Dashboard/>} />
        <Route path='/AddGround' element={ <AddGround/>} />
        <Route path='/MyGround' element={ <MyGround/>} />
          
         </Routes>
      </Router> }
  
      {<div>
          
          {/* <LoginSignup/> */}
          {/* {<LoginWithNo/> } */}
          {/* <LoginOTP/> */}
          {/* <Signup/> */}
          {/* <SignUpOtp/> */}
          {/* { <SignUpdigit/> } */}

          {/* <RouterProvider router={router}/>  */}
        


      </div> }
     
      
    </>
  )
}

export default App
