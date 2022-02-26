import React from "react";
import { useState } from "react";

export default function EditorView(props){
    const [img, setImg] = useState("");
    const handleImgChange = (event) => {
        setImg(event.target.value);
    }
    const [name, setName] = useState("");
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const [manufacturer, setManufacturer] = useState("");
    const handleManufacturerChange = (event) => {
        setManufacturer(event.target.value);
    }
    const [category, setCategory] = useState("");
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    const [description, setDescription] = useState("");
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const [price, setPrice] = useState(0);
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    return(
        <div>
            <h5>Add products</h5>
            <form>
                <div>Image url: <input type="text" value={ img } onChange={ handleImgChange } /></div>
                <div>Name: <input type="text" value={ name } onChange={ handleNameChange } /></div>
                <div>Manufacturer: <input type="text" value={ manufacturer } onChange={ handleManufacturerChange } /></div>
                <div>Category: <input type="text" value={ category } onChange={ handleCategoryChange }/></div>
                <div>Description: <input type="text" value={ description } onChange={ handleDescriptionChange }/></div>
                <div>Price: <input type="number" value={ price } onChange={ handlePriceChange }/></div>
                <button type="button" onClick={ () => props.onAddClick({img, name, manufacturer, category, description, price}) }>Add product</button>
            </form>
            <h5>Delete products</h5>
            {props.products.map(p => <div>{p.name} 
            <button onClick={ () => props.onItemDelete(p.id) }>DELETE</button>
            </div> 
            )}
        </div>
    )
}