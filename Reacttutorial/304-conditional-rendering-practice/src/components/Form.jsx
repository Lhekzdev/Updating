import React from "react";
import Confirmpaswd from "./Confirmpaswd"
function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <Confirmpaswd
      type="password" placeholder ="Confirm Password"/>
  
    
      <button type="submit">Register</button>
    </form>
    
  );
}

export default Form;
