import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./style.module.css"

const Header = () => {
  return (
    <div>
      <span className={styles.header}>My Shopping Cart</span>
      <ul className={styles.navList}>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header