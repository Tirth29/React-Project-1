// import logo from './logo.svg';
import './App.css';
import './navbar';
import Navbar from './navbar';
import TextForm from './Components/TextForm';
import About from './Components/about';
import React, {useState} from 'react'
// import Alert from "./Components/alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

function App() {
  const[mode,setMode]= useState('light');
  // const[alert,setAlert]= useState('');
  // const showalert=(message,type)=>{
  //   setAlert(
  //     {
  //       msg:message,
  //       type:type
  //     }
  //   )
  // }
  const toggleMode = ()=>{
    // if(mode==='dark')
    // {
    //   setMode('light');
    // }
    // else
    // {
    //     setMode('dark');
    // }
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      // showalert("Dark mode has been enabled","success");
      // document.title='TextUtils Dark Mode';
      // setInterval(() => {
      //     document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now !'; 
      // }, 1500);


    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      // showalert("Light mode has been enabled","success");
      // Document.title='TextUtils Light Mode';
    }
  }
  return (
    <>

    <Navbar
     title="TextUtils1" mode={mode} toggleMode={toggleMode}
     aboutText="About textutils"/> 
     {/* <Navbar/> */}
     {/* <Alert alert={alert}/> */}
     <div className="container-main">
      <Router>
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path='/'>
     <TextForm heading="Enter text to analyze"/>
          </Route>
        </Routes>
      </Router>
     </div>
     
    </>
  );
}

export default App;