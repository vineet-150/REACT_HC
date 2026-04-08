import { useState } from 'react'

import './App.css'
import UserThemeProvider from './context/UserThemeProvider'
import ThemeBtn from './Component/AppUI'
import Card from "./Component/Card";
import ThemeContext from './context/ThemeContext';


function App() {





  return (
    <UserThemeProvider>

       
<div className="flex flex-wrap min-h-screen items-center dark:bg-pink-800 bg-amber-600">
  <div className="w-full">
      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
      </div>

      <div className="w-full max-w-sm mx-auto">
        <Card/>
          
      </div>
  </div>
</div>
 </UserThemeProvider>

  )
}

export default App
