import React from 'react'
import styles from "./itemList.module.scss"
 
const ProductList = ({productos}) => {
    
    
  return (
    <div className={styles.contenedorItems}>
      {productos.map((prod) => (
        <div className={styles.contenedorProducts}> 
        <img src={prod.image} alt={prod.title} className={styles.imgProduct}/>
        <h2 key={prod.id}>{prod.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default ProductList