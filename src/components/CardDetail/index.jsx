import {useState, useEffect} from "react"
import { useParams, Link } from 'react-router-dom'
import styles from "./cardDetail.module.scss"
import Button from "../Button"

const CardDetail= () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(data => {
            setProducto(data)
          })
      }, [id])


  return (
    <div> 
        <div className={styles.container}>
            
                <img src={producto.image} alt={producto.title} className={styles.imgProduct}/>
            <div className={styles.divDetail}>
                <h2 key={producto.id}>{producto.title}</h2>
                <p>${producto.price}</p>
                <p>CATEGORY: <Link to={`/${producto.category}`} > {(producto.category)}</Link></p>
                <p>{producto.description}</p>
                <Button />
            </div>

        </div>
    </div>
  )
}

export default CardDetail


/* 
<p><Link to="/category" >{(producto.category).toUpperCase()}</Link></p> */