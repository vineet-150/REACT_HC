import { useState } from 'react'
import {createRoutesFromElements, Link,NavLink, Outlet} from 'react-router-dom'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import { Route } from 'react-router-dom'
import User from './components/User/User'
import Github from './components/Github/Github'
import {githubInfoLoader} from './components/Github/Github'

import './App.css'
import Layout from './Layout'



// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>


//       },
//       {
//         path:"/about",
//         element:<About/>

//       }
//       ,
//       {
//         path:"/contact",
//         element:<Contact/>

//       }
      
//     ]


//   }
// ])

// This is the another suntax for route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element ={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>

    </Route>
  )
)

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <RouterProvider router={router} />
  
   </>
  )
}

export default App
