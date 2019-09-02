import React from "react";
import "../cards/card.css";



export const Card = props => {
  return (
  <div className ="container-fluid">
 

  
    <div className =" card-container ">
   <img  style ={{height:"250px",width:"250px"}} src= {`https://robohash.org/${props.monster.id}?set=set1}`}/>
   <h1>
   {props.monster.name}
 
   </h1>
   </div>
    </div>

 
  );
};
 