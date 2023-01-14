import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context';
import styles from "./style.module.css"

const Header = () => {

  const {cart} = useContext(Cart);

  return (
    <div>
      <span className={styles.header}>My Shopping Cart</span>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart 
          ({cart.length})
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header