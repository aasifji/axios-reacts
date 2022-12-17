
import { useRef, useState } from 'react';
import FetchNews from './Components/FetchNews';
// import './App.css';



function App() {
  const refElement = useRef("");
  const[name,setname]=useState("Aasif")
  console.log(refElement)
  const Reset = ()=>{
    setname("")
    refElement.current.focus()

  }
  const handle = ()=>{
    refElement.current.style.color="blue"  
 refElement.current.value = "Imrana";
  }
  return (
    <div>
    <input type="text"  ref = {refElement} value={name} onChange={(e)=>setname(e.target.value)} />
    <button onClick={Reset}>Reset</button>
    <button onClick={handle}>Handle data</button>

      {/* <UseState/> */}
      <FetchNews/>
    </div>
  );
}

export default App;
