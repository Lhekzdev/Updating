import React ,{useState}from "react";

var count = 0


function App(){
function increase() {
  return(
setCount (count+1 )
  )
}
function decrease() {
  return(
setCount (count-1 )
  )
}



const [count, setCount] =useState(0)

  return(
<div>
<h1>{count}</h1>
<button
onClick={increase}
>+</button>
<button
onClick={decrease}
>-</button>

</div>

  )
}
export default App;

