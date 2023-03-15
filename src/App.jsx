import './App.css'
import ItemList from './components/ItemListContainer/itemList'
import Navbar from './components/Navbar/navbar'

function App() {
  
  return (
    <div className="App">
    <Navbar img={"../src/assets/multimedia/jungle.jpeg"} />
    <ItemList greeting="El numero de objetos en su carrito es de:" />
    </div>
  )
}

export default App
