import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './components/hero/hero.jsx'
import AddToCart from './pages/cart/cart.jsx'
const urls = [
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/hero',
    element:<HeroSection/>
  },
  {
    path:'/cart',
    element:<AddToCart/>
  },
]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
