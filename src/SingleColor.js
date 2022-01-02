import React, { useState, useEffect } from 'react'

const SingleColor = (props) => {
  const [alert, setAlert] = useState(false);
  const rgb = props.color.join(",");
  const handleClickHex = () => {
    setAlert(true);
    navigator.clipboard.writeText(`#${props.hex}`);
  }
  const handleClickRgb = () => {
    setAlert(true);
    navigator.clipboard.writeText(`rgb(${rgb})`);
  }
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false);
    },3000)
  }
    ,[alert]);
  return <>
    <article 
    className = {`color ${props.type==="shade"? "color-light":"false" }`}
    style = {{backgroundColor: `rgb(${rgb})`}}
    
    >
      <p className="percent-value">{props.weight}%</p>
      <p onClick = {handleClickHex} className="color-value">hex: {`#${props.hex}`}</p>
      <p onClick = {handleClickRgb} className="color-value">{`rgb(${rgb})`}</p>
      {alert && <p className="alert">copied to clipboard</p> }
    </article>
  </>
}

export default SingleColor
 