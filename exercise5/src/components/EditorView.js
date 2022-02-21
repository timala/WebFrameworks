import React from "react";

export default function EditorView(props){
    return(
        <div>
            {props.products.map(p => <div>{p.name} 
            <button onClick={ () => props.onItemDelete(p) }>DELETE</button>
            </div> 
            )}
        </div>
    )
}