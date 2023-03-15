import styles from "./cart.module.scss"

const Cart = ({img}) => {
  return (
    <a href="#" className={styles.linkCarro}>
        <img src={img} alt="" width={90} height={50} title="carrito"/> <p className={styles.textoCarro}>0</p>
    </a>
    
  )
}

export default Cart