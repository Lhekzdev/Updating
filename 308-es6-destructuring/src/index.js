// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [tesla, honda] =cars;
const  {speedStats: { topSpeed:teslaTopSpeed }} = honda
const  {speedStats: { topSpeed:hondaTopSpeed }} = tesla
 const {coloursByPopularity: [hondaTopColour ] } =honda   
 const {coloursByPopularity:[,teslaTopColour]} =tesla   
   
 
console.log(tesla)
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
