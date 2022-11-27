import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
      const lower = word?.toLowerCase()||'';
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{height: '70px'}}>    
        {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>:{props.alert.msg} */}

{props.alert && <div className={`alert alert-success`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg }
</div>}
{/* 
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">

    <span aria-hidden="true">&times;</span>
  </button> */}
</div>
      
    // </div>
  )
}

export default Alert
