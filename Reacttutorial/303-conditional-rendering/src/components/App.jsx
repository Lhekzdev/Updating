import React from "react";
import Login from "./Login";


// var isLogedIn = true 

// function renderConditionally(){
// if (isLogedIn ===true)
//   {return <h1>Hello</h1>}

//  else {
//   return(
// <div>
  
//    <Login />
   
//   </div>
      
//   )
// }

// }


  
// function App() {
//   return (
//     <div className="container">
     
//      {renderConditionally()}

 
//     </div>
//   );
// }




// Using Ternary operation
// var isLogedIn = true
const currentTime = new Date ().getHours();
console.log(currentTime)

function App(){
  return (
   <div className="container">
    {
    
    // isLogedIn ===true ? <h1>Hello</h1> : <Login />
    // currentTime < 10 ? < h1>You are progressing </h1> :(null)
    
    // using &&
    currentTime < 10 && < h1>You are progressing </h1> 
    
    }
  </div>
  )
}
export default App;
