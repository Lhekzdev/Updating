import React,{useState} from "react";


function App() {
const [fullName, setfullName] =useState({
  fName:"",
  lName:""
})
function handleChanged (event) {
  const {value,name} =event.target
  setfullName(preValue =>{
if (name === "fName") return {
  fName:value,
  lName:preValue.lName
}
else if (name === "lName") return {
  lName:value,
  fName:preValue.fName
}
  })

}


return (
    <div className="container">
      <h1>Hello   {fullName.fName} {fullName.lName}  </h1>
      <form>
        <input  name="fName" placeholder="First Name" 
onChange={handleChanged} value={fullName.fName}
         />
        <input  name="lName" placeholder="Last Name" 
   onChange={handleChanged} value={fullName.lName}
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;







// import React,{useState} from "react";


// function App() {
//   const [fName, setfName] =useState({
    
//   })
//   const [lName, setlName] =useState("")

// function handleFname(event){

//     const firstname = event.target.value;
//     setfName(firstname)
  
// }
// function handleLname(event){

//     const lastname =event.target.value
//     setlName(lastname)
 
// }
//   return (
//     <div className="container">
//       <h1>Hello  {fName + lName }</h1>
//       <form>
//         <input onChange={handleFname} name="fName" placeholder="First Name" value={fName} />
//         <input onChange={handleLname} name="lName" placeholder="Last Name"  value={lName}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
