import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser




// const {value,name} = event.target
// settitleContent((prevValue)=>{
// if (name === "title") return  {
// title: value,
// content:prevValue.content

// }
// else if (name === "content") return{
// content:value,
// title:prevValue.title

// }



package.json:

"@mui/icons-material": "^5.15.11",
"@mui/material": "^5.15.11",
"@emotion/react": "^11.11.4",
"@emotion/styled": "^11.11.0",


CreateArea.jsx

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


Header.jsx

import HighlightIcon from "@mui/icons-material/Highlight";


Note.jsx

import DeleteIcon from "@mui/icons-material/Delete";