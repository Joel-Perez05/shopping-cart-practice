import React from 'react'
import styles from "./style.module.css"


const SingleProduct = ({product}) => {
  return (
    <div className={styles.products}>
      <img src={product.images[0]} alt={product.name} />
      <div className={styles.productDesc}>
        <span>{product.title} </span>
        <span>${product.price}</span>
      </div>
      <button className='add'>Add to Cart</button>
    </div>
  )
}

export default SingleProduct