// import logo from './logo.svg';
import './App.css';
import './navbar';
import Navbar from './navbar';
import TextForm from './Components/TextForm';
import About from './Components/about';
import React, {useState} from 'react'


function App() {
  const[mode,setMode]= useState('light');
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

    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
    
    }
  }
  return (
    <>

    <Navbar
     title="TextUtils1" mode={mode} toggleMode={toggleMode}
     aboutText="About textutils"/> 
     {/* <Navbar/> */}
     <div className="container-main">
     <TextForm heading="Enter text to analyze"/>
     </div>
     <About/>
    </>
  );
}

export default App;
