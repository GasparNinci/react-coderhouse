
import styles from "./navbar.module.scss";
import Cart from "../Cart/cart";


const Navbar = ({img}) => {
  return (
    <nav className={styles.container}>
        <ul>
            <li><a href="/"><img src={img} alt="" width={100} height={50} title="Ir al inicio"/></a></li>
            <li><a href="/">Nosotros</a></li>
            <li><a href="catalogo">Modelos</a></li>
            <Cart img={"../src/assets/multimedia/carrito.png"}/>
        </ul>
    </nav>
  )
}

export default Navbar;