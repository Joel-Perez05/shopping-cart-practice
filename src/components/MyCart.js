import React, {useState, useEffect, useContext} from 'react'
import { Cart } from '../Context';
import SingleProduct from './SingleProduct'
import styles from "./style.module.css"


const MyCart = () => {
  const {cart} = useContext(Cart);

  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    setCartTotal(cart.reduce((acc,curr) => acc + Number(curr.price), 0))
  }, [cart])
  

  return (
    <div>
      <span>My Cart</span>
      <br />
      <span>Total: ${cartTotal}</span>
      <div className={styles.prodContainer}>{
        cart.map((product) => 
        <SingleProduct key={product.id} product={product} />)
      }</div>
    </div>
  )
}

export default MyCart