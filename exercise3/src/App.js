import './App.css';
import { useState } from 'react';
import Products from './components/Products';
import image1 from './components/pictures/kuva.png';
import image2 from './components/pictures/kuva2.png';
import image3 from './components/pictures/kuva3.png';
import image4 from './components/pictures/kuva4.png';
import image5 from './components/pictures/kuva5.png';
import image6 from './components/pictures/kuva6.png';
import Search from './components/Search';

function App() {
  const products = [
    {
      id: 1, 
      productImage: image1,
      name: "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)",
      price: 226.99,
      shipping: 48.63
    },
    {
      id: 2, 
      productImage: image2,
      name: "Original HP 63XL Black High-yield Ink Cartridge | Works with HP DeskJet 1112, 2130, 3630 Series; HP ENVY 4510, 4520 Series; HP OfficeJet 3830, 4650, 5200 Series | Eligible for Instant Ink | F6U64AN",
      price: 41.89,
      shipping: 13.72
    },
    {
      id: 3, 
      productImage: image3,
      name: "Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Roku Voice Remote with TV Controls",
      price: 29.99,
      shipping: 15.41
    },
    {
      id: 4, 
      productImage: image4,
      name: "Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service (STGX2000400)",
      price: 59.99,
      shipping: 15.49
    },
    {
      id: 5, 
      productImage: image5,
      name: "Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls",
      price: 29.98,
      shipping: 15.49
    },
    {
      id: 6, 
      productImage: image6,
      name: "iPhone Charger, TAKAGI Lightning Cable 3PACK 6FT Nylon Braided USB Charging Cable High Speed Data Sync Transfer Cord Compatible with iPhone 13/12/11 Pro Max/XS MAX/XR/XS/X/8/7/Plus/6S/6/SE/5S/iPad",
      price: 9.99,
      shipping: 14.97
    },
  ];

  const [productListing, setProducts] = useState(products);

  const search = (param) => {
    if(param === ""){
      setProducts(products);
    }else{
      let foundProducts = products.filter(el => el.name.toLowerCase().indexOf(param.toLowerCase()) !== -1)
      setProducts(foundProducts);
    }
  }

  return (
    <div> 
      <Search search={ search } />   
      <Products products={ productListing } /> )
    </div>
  );
}

export default App;
