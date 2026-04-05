import { useState } from 'react'
import {Link,NavLink, Outlet} from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

import './App.css'
import Layout from './Layout'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>


      },{
        path:"/about",
        element:<About/>

      }
    ]


  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <RouterProvider router={router} />
  
   </>
  )
}

export default App
