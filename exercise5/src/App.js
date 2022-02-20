import './App.css';
import { useState } from 'react';
import Products from './components/Products';

function App() {
  const [searchParam, setSearchParam] = useState("");
  const [productListing, setProducts] = useState(products);

  const handleSearchChange = (event) => {
    setSearchParam(event.target.value);
    if(event.target.value == ""){
      console.log("Tyhjä")
      setProducts(products);
    }else{
      console.log(event.target.value);
      let foundProducts = products.filter(el => el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
      setProducts(foundProducts);
    }
  }

  return (
    <div> 
      <input type="text" placeholder='Search' value={ searchParam } onChange={ handleSearchChange } />   
      <div className='productContainer'>
        { productListing.map( p => <Products name={ p.name } image={ p.productImage } price={ p.price } shipping={ p.shipping } /> ) }  
      </div>
    </div>
  );
}

export default App;
