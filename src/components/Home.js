import React, {useEffect, useState} from 'react'
import axios from "axios"
import styles from "./style.module.css"
import SingleProduct from './SingleProduct'

const Home = () => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setAllProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className={styles.prodContainer}>
      {
        allProducts.map((product) => 
        <SingleProduct key={product.id} product={product} />)
      }
    </div>
  )
}

export default Home