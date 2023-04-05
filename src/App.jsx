import './App.css'
import Navbar from './components/Navbar/navbar'
import {useState, useEffect} from "react"
import {Navigate, Route, Routes, useParams} from "react-router-dom";
import Home from './components/Home';
import ProductList from './components/ItemListContainer';
import CardDetail from './components/CardDetail';

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
    
    <Route path="/" element={<Navigate to="/home"/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='items' element={<ProductList productos={productos}/>}/>
    <Route path='/items/:id' element={<CardDetail />} />
    </Routes>
    </div>
  )
}

export default App
