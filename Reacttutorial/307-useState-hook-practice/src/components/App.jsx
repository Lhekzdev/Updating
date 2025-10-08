
import { useState } from "react";
function App(){
const now = new Date().toLocaleTimeString()

function newtime() {
  const now = new Date().toLocaleTimeString()
  return(
    setupDatetime(now

    )
  )

}
setInterval(newtime, 1000);

// function newtime(){
  
//   const now = new Date().toLocaleTimeString()
//   return(
//     setupDatetime(now

//     )

//   )
// }
const [upDatetime, setupDatetime] = useState(now);

  return (
<div>
  <h1>{upDatetime}</h1>
  <button
  
  onClick={newtime}>click me</button>
</div>
  )
}

export default App;