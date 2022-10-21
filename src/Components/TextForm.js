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
    const[text,setText] = useState("Enter text here...");
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea className="form-control" value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button className='btnprimary' onClick={convertUpCase}>Convert to Uppercase</button>
    </div>
  )
}
