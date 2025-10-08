import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
const [addNote,setAddnote] =useState([])

function addingNote(notes) {
  setAddnote((PrevNote)=>{
 return [...PrevNote,notes] }
 )
//  console.log(notes);
   
}


function deleteItem(id){
  
    setAddnote(
      (prevNotes)=>{
return prevNotes.filter((addednote,index )=>{
return( index !== id)
})
 





      }
    )
  
}
  return (
    <div>
      <Header />
      <CreateArea 
      addNote={addingNote}/>

{addNote.map((addednote,index)=>{
 return < Note
 id={index}
 key={index}
 title = {addednote.title}
 content ={addednote.content}
 removeItem={deleteItem}
 />
})}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
