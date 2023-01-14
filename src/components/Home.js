import React, {useEffect, useState, useContext} from 'react'
import axios from "axios"
import styles from "./style.module.css"
import SingleProduct from './SingleProduct'
import { Cart } from '../Context'

const Home = () => {

  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=50')
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