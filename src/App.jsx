import './App.css'
import Navbar from './components/Navbar/navbar'
import {useState} from "react"
import {Navigate, Route, Routes} from "react-router-dom";
import Home from './components/Home';
import { useEffect } from 'react';
import ProductList from './components/ItemListContainer';

function App() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
      fetch(`https://fakestoreapi.com/products`)
        .then(response => response.json())
        .then(data => {
          setProductos(data)
        })
    }, [])
  
  return (
    <div className="App">
    <Navbar img={"../src/assets/multimedia/jungle.jpeg"} />
    
    
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path='/catalogo' element={<ProductList productos={productos}/>}/>
    </Routes>
    </div>
  )
}

export default App
