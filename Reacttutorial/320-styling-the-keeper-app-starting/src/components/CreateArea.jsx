import React, { useState } from "react";
import AddTaskIcon from '@mui/icons-material/AddTask';

import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isDisplayed,setisDisplayed] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }


  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  
 
  
 function handleDisplayed(){
    
 setisDisplayed(true) ;

  }

  return (
    <div>
      <form  className="create-note">
   {   isDisplayed &&
    <input
      name="title"
 
    onChange={handleChange}
    value={note.title}
    placeholder="Title"
  />  }
  
 
        
      
    
      <textarea
      onClick={handleDisplayed}
     name="content"
     onChange={handleChange}
     value={note.content}
     placeholder="Take a note..."
     rows={ isDisplayed? "3" :"1"}
 />
    
 <Zoom in={isDisplayed}><Fab onClick={submitNote}><AddTaskIcon/></Fab>
</Zoom></form>
    </div>
  );
}

export default CreateArea;
