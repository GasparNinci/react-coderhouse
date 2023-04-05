import {Link} from "react-router-dom";
import styles from "./navbar.module.scss";
import Cart from "../Cart/cart";
import React from "react";


const Navbar = ({img}) => {
  return (
    <nav className={styles.container}>
        {<div>
            <Link to="/" className={styles.navbarItem}>
            <img src={img} alt="" width={100} height={50} title="Ir al inicio"/>
            </Link>
            <Link to="/nosotros" className={styles.navbarItem}>Nosotros</Link>
            <Link to="/items" className={styles.navbarItem}>Modelos</Link>
            <Link to="/cart" className={styles.navbarItem}>
              <Cart img={"../src/assets/multimedia/carrito.png"}/>
            </Link>
        </div>}
    </nav>
  )
}

export default Navbar;


//anterior 
{/* <ul>
            <li><a href="/"><img src={img} alt="" width={100} height={50} title="Ir al inicio"/></a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="catalogo">Modelos</a></li>
            <Cart img={"../src/assets/multimedia/carrito.png"}/>
        </ul> */}