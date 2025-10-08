import React,{useState} from "react";


function App() {

  const [isClicked, setisClicked] =useState("Hello")
  const [isMoused, setisMoused] =useState(false)
  function handleClicked(){
    return(
      setisClicked("Submitted")
    )
  }
  // function handleMousedover(){
  //   return(
  //     setisMoused("Submitted")
  //   )
  // }

 
function handleisMoused(){
  return(
    setisMoused(true)
  )
}
  
function handleMousedout(){
  return(
    setisMoused(false)
  )
}

  return (
    <div className="container">
      <h1>{isClicked}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMoused? "red":"black"}}
      onClick={handleClicked}
      onMouseOver={handleisMoused}
      onMouseOut={handleMousedout}
      
      >Submit</button>
    </div>
  );
}

export default App;


