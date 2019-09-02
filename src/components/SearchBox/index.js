import React from "react";
import  "../cards/card.css"

export const SearchBox =({placeholder ,handlerChange}) => (
<input
className ="search"
 type ="search"
placeholder ={placeholder}
onChange={handlerChange}/>

    )
