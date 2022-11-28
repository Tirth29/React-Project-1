// import logo from './logo.svg';
import "./App.css";
import "./navbar";
import Navbar from "./navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/about";
import React, { useState } from "react";
import Alert from "./Components/alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

// After adding another color toggler mode dark mode button stop working so remove it 
// if you want to restore dark mode button remove diferent color button and restore dark mode button

function App() {
  const [mode, setMode] = useState("light");
  const[alert,setAlert]= useState('');
  const showalert=(message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
  }
// const removeBodyClasses = ()=>
// {
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-success');
// }

  const toggleMode = (cls) => {
    // if(mode==='dark')
    // {
    //   setMode('light');
    // }
    // else
    // {
    //     setMode('dark');
    // }
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has been enabled","Success");

      // document.title='TextUtils Dark Mode';
      // setInterval(() => {
      //     document.title = 'TextUtils is amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils now !';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled","success");
      // Document.title='TextUtils Light Mode';
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils1"  
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About textutils"
        />
        {/* <Navbar/> */}
        <Alert alert={alert} mode={mode}/>
        <div className="container-main">
          <Routes>
            <Route path="/about" element={<About />} mode={mode}/>
            <Route
              path="/"
              element={<TextForm heading="Try TextUtils Word & Character Counter, Remove space, Copy-text, Case Converter" mode={mode} />}
            />
            {/* <TextForm heading="Enter text to analyze" mode={mode}/> */}
          </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
