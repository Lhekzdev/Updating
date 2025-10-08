import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
  const [notes, setNotes] = useState(
    {
      title: "",
      content: ""
    }
  )
  function handleChange(event) {
    const { name, value } = event.target;
 
      setNotes(preValues => {
          return {...preValues, [name]: value }

        

        }
      
    )
  }


  function submitted(event){
    event.preventDefault()
    return(
      props.addNote(notes)
    )
  }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={notes.tvalue} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={notes.cvalue} />
        <button onClick={submitted} >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
