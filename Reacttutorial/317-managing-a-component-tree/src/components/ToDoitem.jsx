import React from "react"



function ToDoitem(props){

  
  
return (
<div onClick={()=>{
  props.onChecked(props.id)
} } >
<li   > {props.text} </li>
  </div>
);  

        
    }    

    export default ToDoitem;

































//     import React, { useState } from "react"



// function ToDoitem(props){
// const [isClicked, setisClicked] =useState(false)
//   function handleClick(){

//     setisClicked(prevValue =>{
// return!prevValue;




//     } )
//   }


 
   
// return (
// <div >
// <li  onClick={handleClick} style={{textDecoration: isClicked? "line-through": "none"}}> {props.text} </li>
//   </div>
// );  

        
//     }    

//     export default ToDoitem;