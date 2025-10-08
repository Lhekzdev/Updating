import React, { useState } from "react";

function App() {
const [name, setName] =useState("")
const [headingText,setheadingText] =useState("")
function HandleNamechanged(event){
  return(
    setName(event.target.value)
   
     
  )
}

function handleClick(event){
 
    setheadingText(name);
    event.preventDefault()
  
}
console.log(name);
  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
     <form onSubmit={handleClick}>
      <input onChange={HandleNamechanged} type="text" placeholder="What's your name?" value={name}/>
      <button type="submit"
     >Submit</button>
   </form>
    </div>
  );
}

export default App;
