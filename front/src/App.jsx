import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Header'
import Home from './pages/Home'
import  ProductsContext  from './context/ContextProducts'
import { ROUTES } from './router/ROUTES'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const routesa = createBrowserRouter(ROUTES)
  return (
    <>
      <ProductsContext>
        <RouterProvider router={routesa} />


      </ProductsContext>

    </>
  )
}

export default App
