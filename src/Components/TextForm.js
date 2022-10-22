import React, { useState } from 'react'

export default function TextForm(props) {
    // Text=mytext;   wrong way to change
    // setText=mytext;   write way to change
    const convertUpCase=()=>
    {
        // console.log("Convert uppercase clicked"+ text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleonchange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const convertlowCase=()=>{
        let lowcase=text.toLowerCase();
        setText(lowcase);

    }
    const removeextraspace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const copy=()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value)
    }
    const cleartext=()=>{
        let newText='';
        setText(newText);
    }
    const[text,setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      {/* <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743' }} rows="3"></textarea>
</div>
<button className='btn btn-primary' onClick={convertUpCase}>Convert to UpperCase</button><br></br><br></br>
<button className='btn btn-primary' onClick={convertlowCase}>Convert to LowerCase</button><br></br><br></br>
<button className='btn btn-primary' onClick={copy}>Copy Text</button><br></br><br></br>
<button className='btn btn-primary' onClick={cleartext}>clearText</button> 
<button className='btn btn-primary' onClick={removeextraspace}> Remove Extra Space</button>
    </div>
    <div className='container my-32' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes read </p>
    <h2>Preview</h2>
    <p>{text}</p>

    </div>
    </>
  )
}
