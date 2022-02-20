import React from "react";

export default function Products(props){
    return(     
        <div className="product">
            <img src={ props.image } />
            <h4>{ props.name }</h4>
            <div>${ props.price }</div>
            <div>${ props.shipping } shipping</div>
        </div>
    )
}
