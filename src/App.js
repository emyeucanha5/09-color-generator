import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'
import rgbToHex from './utils.js'


function App() {
  const [inp, setInp] = useState('');



  const initColor = () => {
    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const color = [r,g,b].join(",");
    // return `rgb(${color})`
    return [r,g,b];
  }
  const init = () => {
    return rgbToHex(initColor()[0],initColor()[1],initColor()[2])
  }
  const [colors, setColors] = useState(new Values(init()).all(10));
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    try{
      const list = new Values(inp).all(10);
      setColors(list); 
    }catch(error){
      setError(true);
      console.log(error)
    }
  }
  return <>
    <section className="container">
     <h3>Color Generator</h3>
     <form onSubmit ={handleSubmit}>
       <input 
      type="text"
      placeholder = {`${init()}`}
      value={inp}
      className={`${error?"error":"null"}`}
      onChange ={(e) => setInp(e.target.value)}
      />
       <button type = "submit" className="btn">
       submit
       </button>
     </form>
    </section>
     <section className="colors">
       {colors.map((item, index) => {
        return <SingleColor key = {index} color = {item.rgb} type ={item.type} weight={item.weight} hex={item.hex}/> 
       })}
    </section>
  </>
}

export default App
 