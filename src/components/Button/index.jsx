import styles from "./button.module.scss"

import React from 'react'

const Button = () => {
  return (
    <button className={styles.botonCarrito}><img src="../src/assets/multimedia/carrito1.png" alt="" title="Añadir al carrito" /></button>
  )
}

export default Button