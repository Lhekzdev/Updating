import React from "react";
import { useState } from "react";

function App() {
 
 const   [newText,setnewText] =useState("")
 const    [items,setItems] =useState ([])

function handleChanged(event){
 const newInput = event.target.value;

  setnewText(newInput)
}
  
function addItem(){
  setItems( prevValue =>{ 
   return [...prevValue, newText]
  })
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
       
        <input type="text" 
onChange={handleChanged}
value={newText}
        />
        
        <button  onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
     
     
      <div>
        <ul>

          {items.map(newAdded => <li>{newAdded}</li>  )}
       
            
        
        </ul>
      </div>
    </div>
  );
}

export default App;



































// import React from "react";
// import { useState } from "react";

// function App() {

//   const [items,setItem] = useState("");
//   const [newItems,setnewItems] =useState([]);

// function handleChanged(event) {
//  const newValue = event.target.value
//   setItem(newValue)
// }
// console.log();

// function handleClicked(){
//   setnewItems( prevItems =>{
//     return [...prevItems, items]

  

//   }



//   )
//   // event.preventDefault()
// }

//   return (
//     <div className="container">
//       <div className="heading">
//         <h1>To-Do List</h1>
//       </div>

//       <div className="form">
       
//         <input onChange={handleChanged} type="text" value={items} />
        
//         <button 
//         onClick={handleClicked}
        
//         >
//           <span>Add</span>
//         </button>
//       </div>
     
     
//       <div>
//         <ul>
//           {newItems.map(todoItem =>  <li>{todoItem}</li>) }
//             </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
