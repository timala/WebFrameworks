import react from 'react';

export default function Buttons(props){
    return (
      <div>
        <button onClick={ () => props.onAddClick('Carrots', 'pcs') }>Add carrots</button>
        <button onClick={ () => props.onAddClick('Strawberries', 'kg') }>Add strawberries</button>
        <button onClick={ () => props.onAddClick('Yogurt', 'ltr') }>Add yogurt</button>
        <button onClick={ () => props.onAddClick('Beer', 'x') }>Add beer</button>
      </div>
    )
}