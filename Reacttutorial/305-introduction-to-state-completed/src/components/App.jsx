import React from "react";

var isDone = false;

function addColor(){
  document.getElementById("root").style.backgroundColor= "blue"
}
function removeColor(){
  document.getElementById("root").style.backgroundColor= "null"
}

function App() {

  // const bGcolor = {backgroundColor: "blue"}
  return (
    <div>

      <p >Buy milk</p>
      <button onClick={addColor}>Change to blue</button>
      <button onClick={removeColor}>remove color</button>
     
    </div>
  );
}

export default App;
