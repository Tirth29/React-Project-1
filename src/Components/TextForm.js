import React, { useState } from "react";

export default function TextForm(props) {
  // Text=mytext;   wrong way to change
  // setText=mytext;   write way to change
  const convertUpCase = () => {
    // console.log("Convert uppercase clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const convertlowCase = () => {
    let lowcase = text.toLowerCase();
    setText(lowcase);
  };
  const removeextraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const copy = () => {
    console.log("I am Copy");
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard !", "Success");
  };
  const cleartext = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2  className="mb-0" style={ { color: props.mode === "dark" ? "white" : "#042743" }}>
          {props.heading}
        </h2>
        {/* <div className="mb-3">
  <label htmlFor"exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div> */}
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="exampleFormControlTextarea1"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={convertUpCase}>
          Convert to UpperCase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={convertlowCase}>
          Convert to LowerCase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={copy}>
          Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={cleartext}>
          clearText
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={removeextraspace}>
          {" "}
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-32"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here "}</p>
      </div>
    </>
  );
}
