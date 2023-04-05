import {Link} from "react-router-dom";
import styles from "./itemList.module.scss"
import Button from '../Button'


const ProductList = ({productos}) => {
        
  return (
    <div className={styles.contenedorItems}>
      {productos.map((prod) => (
      <Link to={`${prod.id}`} className={styles.divContenedor}>
        <div> 
          <img src={prod.image} alt={prod.title} className={styles.imgProduct}/>
          <h2 key={prod.id}>{prod.title} <br/> <Button /></h2>
        </div>
      </Link>
      ))}
    </div>
  )
}

export default ProductList




/* ANTERIOR
import Card from "../Card"

const ProductList = ({productos}) => {
  return (
    <div >
      {productos.map((producto) => (
        <Card key={producto.id} prod={producto} />
      ))}
    </div>
  )
}

export default ProductList */