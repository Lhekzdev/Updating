import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

function handleChanged(event){
const {value,name} =event.target
setContact(preValue =>{

  
return{
  ...preValue,
  [name] : value

}
 


})

}

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChanged} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={handleChanged} name="lName" placeholder="Last Name" value={contact.lName} />
        <input onChange={handleChanged} name="email" placeholder="Email" value={contact.email}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
