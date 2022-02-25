import React from "react";

export default function Products(props){
    return(
        <div className='productContainer'>
            {props.products.map(p => <div className="product">
            <img src={ p.productImage } />
            <h4>{ p.name }</h4>
            <div>${ p.price }</div>
            <div>${ p.shipping } shipping</div>
            </div>)} 
        </div>
    )
}
