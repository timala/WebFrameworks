import React from "react";

export default function Products(props){
    return(     <div className="productContainer">
            { props.products.map(p => <div className="product"><h4>{ p.name }</h4>
                    <div>${ p.price }</div>
                    <div>{ p.description }</div>
                    <div>manufacturer: { p.manufacturer }</div>
                    </div>
                )}
                </div>
    )
}
