import React,{useState} from "react";
export default function About(props) {

  // let style={
  //   color: 'white',
  //   backgroundColor: 'black'
  // }
  const[style,setStyle]=useState({
    color: 'white',
    backgrounColor: 'black'
  })
  const[btnText,btnNewText]= useState("Enable Light Mode");

  const toggleStyle= ()=>{

    if(style.color === 'white')
    {
      setStyle(
        {
          color: 'black',
          backgroundColor: 'white'
        }
      )
      btnNewText("Enable Dark Mode");
    }
    else
    {
      setStyle(
        {
          color: 'white',
          backgroundColor: 'black'
        }
      )
      btnNewText("Enable Light Mode");
    }

  }

  return (
    <>
    <div className="alert alert-primary" style={style} role="alert">
    A simple primary alert—check it out!
  </div>
  <div className="alert alert-secondary" style={style} role="alert">
    A simple secondary alert—check it out!
  </div>
  <div className="alert alert-success" style={style} role="alert">
    A simple success alert—check it out!
  </div>
  <div className="alert alert-danger" style={style} role="alert">
    A simple danger alert—check it out!
  </div>
  <div className="alert alert-warning" style={style} role="alert">
    A simple warning alert—check it out!
  </div>
  <div className="alert alert-info" style={style} role="alert">
    A simple info alert—check it out!
  </div>
  <div className="alert alert-light" style={style} role="alert">
    A simple light alert—check it out!
  </div>
  <div className="alert alert-dark" style={style} role="alert">
    A simple dark alert—check it out!
  </div>
  <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
    </>
   
  )
}
