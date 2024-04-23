
import React, { useState } from "react";

function App() {
  const[color,setColor]= useState("olive")
  
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">


   <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">


    <button onClick={()=>{setColor("red")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg  hover:text-3xl hover:text-red"
          style={{backgroundColor: "red"}}>Red</button>

    <button onClick={()=>{setColor("green")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg  hover:text-3xl hover:text-green"
          style={{backgroundColor: "green"}}>Green</button>

    <button onClick={()=>{setColor("yellow")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg  hover:text-3xl hover:text- yellow"
          style={{backgroundColor: "yellow"}}>yellow</button>

    <button onClick={()=>{setColor("black")}} className="outline-none px-4 py-1 rounded-full text-white shadow-lg hover:text-3xl hover:text-white"
          style={{backgroundColor: "black"}}>black</button>
    
   </div>
   </div>

    </div>
  )
  
  }
  
    
  


export default App;
