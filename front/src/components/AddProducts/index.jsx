import { Button, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { useFormik } from "formik";
import { post } from '../../API'
import { Product } from '../../classes/ProductsValidation'
import { AddProductsSchema } from '../../validation/AddProducts';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../../context/ContextProducts';
const AddProduct = () => {
  const { products, setProducts } = useContext(ProductsContext)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      imgSrc: '',
      name: '',
      title: ''
    },
    onSubmit: (values) => {
      console.log(values);
      const newProduct = new Product(values.imgSrc, values.name, values.title)
      post(newProduct)
      console.log(newProduct);
      setProducts((currenProduct) => [...currenProduct, newProduct])
      navigate('/')
    },
    validationSchema: AddProductsSchema
  })
  return (

    <form action="" onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', width: '40%', margin: '0 auto' }}>
      <h1>Add Products</h1>
      <TextField id="outlined-basic" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.imgSrc} label="imgSrc" variant="outlined" name='imgSrc' />
      <span style={{ color: 'red' }}>{formik.errors.imgSrc}</span>
      <TextField id="outlined-basic" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.name} label="name" variant="outlined" name='name' />
      <span style={{ color: 'red' }}>{formik.errors.name}</span>
      <TextField id="outlined-basic" style={{ width: '100%' }} onChange={formik.handleChange} value={formik.values.title} label="title" variant="outlined" name='title' />
      <span style={{ color: 'red' }}>{formik.errors.title}</span>
      <Button type='submit'>Submit</Button>
    </form>

  )
}

export default AddProduct