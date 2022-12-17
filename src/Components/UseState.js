import React, { useEffect, useState } from 'react'

function UseState() {
    const[count,setcount]=useState(0)
   const[name,setname]=useState('Aasif')
   
    useEffect(()=>{
        console.log("the value is updated")
        
    },[count])
    
  return (
    <div>
         <h1>The value of count {count} Change</h1><br />
         
         <h1>the name is {name}</h1>
      <button onClick={()=>setcount(count+2)}>Click</button><br />
      <button onClick={()=>setname("Rashid")}>Setname</button>
    </div>
  )
}

export default UseState
