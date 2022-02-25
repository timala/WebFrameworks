import React from "react";
import { useState } from "react";

export default function Search(props){
    const [searchParam, setSearchParam] = useState("");

    const handleSearchChange = (event) => {
        setSearchParam(event.target.value);
        props.search(event.target.value);
    }

    return( <div>
            <input type="text" placeholder='Search' value={ searchParam } onChange={ handleSearchChange } />
        </div>)
}