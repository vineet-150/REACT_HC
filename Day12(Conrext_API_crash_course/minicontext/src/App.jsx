import { useState } from 'react'
import UseContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <UseContextProvider>
    <h1> Learning the COntext API crash Course  </h1>
    <Login/>
    <Profile/>

     </UseContextProvider>

  )
}

export default App
