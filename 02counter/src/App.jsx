import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [value, setValue] = useState(15)
  
  // let value = 15;

  const addValue=()=>{
    setValue(value+1);
    if(value+1 > 20 ){
      setValue(20)
      alert("value can not be more than 20")
    }
    else{
      setValue(value+1);
    }
  }

  const removeValue=()=>{
    if(value-1 < 0 ){
      setValue(0)
      alert("value can be not less than 0");
    }
    else{
      setValue(value-1);
    }
    
  }

  return (
    <>
      <h3>current value: {value}</h3>

      <button onClick={addValue}>increase value:{value}</button>
      <br />
      <button onClick={removeValue}>decrease value:{value}</button>

    </>
  )
}

export default App
