import React from "react";
import Form from "./Form";
import Login from "./Login";

import Confirmpaswd from "./Confirmpaswd"
var userIsRegistered = false;

function App() {
  return (
    <div className="container">

   
    {/* {userIsRegistered === true ? <Login /> : <Form/> } */}
    {userIsRegistered === false && <Confirmpaswd/>  }



</div>
  );
}

export default App;
