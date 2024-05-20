import React, { createContext, useEffect, useState } from 'react'
import { getAll } from '../API'
export const ProductsContext = createContext(null)
const ContextProducts = ({ children }) => {
  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem("basket")) : [])
  useEffect(() => {
    getAll().then((res) => {
      setProducts(res.data.data)
    })
  }, [])

  return (
    <ProductsContext.Provider value={{ products, setProducts,basket, setBasket }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ContextProducts