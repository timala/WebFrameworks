import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import EditorView from './components/EditorView';

function App() {
  //const [searchParam, setSearchParam] = useState("");
  const [productListing, setProducts] = useState([]);

  useEffect(() => {
    const getData = async() => {
      const results = await axios.get('http://localhost:3001/product');
      setProducts(results.data);
    }
    getData();
  }, []);

  const onAddClick = async(item) => {
    await axios.post('http://localhost:3001/product', {
      name: item.name,
      manufacturer: item.manufacturer,
      category: item.category,
      description: item.description,
      price: item.price
    })
    const getData = async() => {
      const results = await axios.get('http://localhost:3001/product');
      setProducts(results.data);
    }
    getData();
  }

  const onItemDelete = (item) => {
    let newProducts = [...productListing];
    let deletedItemIndex = newProducts.findIndex(p => p.id === item.id);
    newProducts.splice(deletedItemIndex, 1);
    setProducts(newProducts);
  }

  const [EditorModeOn, setEditorModeOn] = useState(false);
  let output = <Products products={ productListing } />
  if(EditorModeOn === true){
    output = <EditorView products={ productListing } onAddClick={ onAddClick } onItemDelete={ onItemDelete } />
  }

/*   const handleSearchChange = (event) => {
    setSearchParam(event.target.value);
    if(event.target.value == ""){
      useEffect(() => {
        const getData = async() => {
          const results = await axios.get('http://localhost:3001/product');
          setProducts(results.data);
        }
        getData();
      }, []);
    }else{
      useEffect(() => {
        const getData = async() => {
          const results = await axios.get('http://localhost:3001/product');
          let foundProducts = results.data.filter(el => el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1)
          setProducts(foundProducts);
        }
        getData();
      }, []);
    }
  } */

  return (
    <div> 
{/*       <input type="text" placeholder='Search' value={ searchParam } onChange={ handleSearchChange } /> */}
      <button onClick={ () => setEditorModeOn (!EditorModeOn) }>Admin mode toggle</button>
        { output }
      </div>
  );
}

export default App;
