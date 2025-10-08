import React from "react";
import Newemoji from "./newEmoji";
import emojipedia from "../emojipedia";
import Createemoji from "./Createemoji";



function App() {
 
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
     
      {emojipedia.map(Createemoji)} 

  
      </dl>
    </div>
  );
}

export default App;


