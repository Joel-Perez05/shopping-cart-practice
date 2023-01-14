import React, {useContext} from 'react'
import { Cart } from '../Context';
import styles from "./style.module.css"


const SingleProduct = ({product}) => {

  const {cart, setCart} = useContext(Cart);

  return (
    <div className={styles.products}>
      <img src={product.images[0]} alt={product.name} />
      <div className={styles.productDesc}>
        <span>{product.title} </span>
        <span>${product.price}</span>
      </div>
      {
        cart.includes(product) ? 
          <button className='' onClick={() => {
            setCart(cart.filter((c => c.id !== product.id)))
            }}>Remove From Cart</button> :
          <button className='add' onClick={() => {
            setCart([...cart, product])
            }}>Add to Cart</button>
      }
    </div>
  )
}

export default SingleProduct