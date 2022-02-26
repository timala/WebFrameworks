import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Products from './components/Products';
import EditorView from './components/EditorView';
import Search from './components/Search';

function App() {
  const [productListing, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const getData = async() => {
      const results = await axios.get('http://localhost:3001/product');
      setProducts(results.data);
    }
    if(searchParam === ""){
    getData();
  }});

  const onAddClick = async(item) => {
    await axios.post('http://localhost:3001/product', {
      img: item.img,
      name: item.name,
      manufacturer: item.manufacturer,
      category: item.category,
      description: item.description,
      price: item.price
    })
  }

  const onItemDelete = async(id) => {
    await axios.delete(`http://localhost:3001/product/${id}`);
  }

  const [EditorModeOn, setEditorModeOn] = useState(false);
  let output = <Products products={ productListing } />
  if(EditorModeOn === true){
    output = <EditorView products={ productListing } onAddClick={ onAddClick } onItemDelete={ onItemDelete } />
  }

  const handleSearchChange = (event) => {
    setSearchParam(event.target.value);
    search(event.target.value);
} 

  const search = (param) => {
      if(param !== ""){
        const getData = async() => {
          const results = await axios.get(`http://localhost:3001/product/search/${param}`);
          setProducts(results.data);
        }
        getData();
      }
    }

  return (
    <div>  
      <button onClick={ () => setEditorModeOn (!EditorModeOn) }>Admin mode toggle</button>
      <Search searchParam={ searchParam } handleSearchChange={ handleSearchChange } />
      { output }
    </div>
 )
  }

export default App;
