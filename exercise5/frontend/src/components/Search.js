import React from "react";

export default function Search(props){
    return( <div>
            <input type="text" placeholder='Search for products based on name, manufacturer or category' value={ props.searchParam } onChange={ props.handleSearchChange } />
        </div>)
}