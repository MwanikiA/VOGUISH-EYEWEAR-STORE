import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HeroSection from './components/hero/hero.jsx'
import AddToCart from './pages/cart/cart.jsx'
import Contacts from './pages/contact-lenses/contact-lenses.jsx'
import Sunglasses from './pages/sunglasses/sunglasses.jsx'
import Optical from './pages/optical-glasses/optical.jsx'
import Masquerade from './pages/masquarade-masks/masquarade-masks.jsx'
import Loginmain from './pages/login/loginmain.jsx'
import Registermain from './pages/login/registermain.jsx'
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
  {
    path:'/contact-lenses',
    element:<Contacts/>
  },
  {
    path:'/sunglasses',
    element:<Sunglasses/>
  },
  {
    path:'/optical-glasses',
    element:<Optical/>
  },
  {
    path:'/masquarade-masks',
    element:<Masquerade/>
  },
  {
    path:'/loginmain',
    element:<Loginmain/>
  },
  {
    path:'/registermain',
    element:<Registermain/>
  },

]

const paths = createBrowserRouter(urls)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}/>
  </React.StrictMode>,
)
