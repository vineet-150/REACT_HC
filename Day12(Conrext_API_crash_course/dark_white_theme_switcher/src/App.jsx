
import { useState,useEffect} from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/theme'
import Card from './components/Card'

function App() {

   const [themeMode,setThemMode]=useState("light")

   const lightTheme=()=>{
    setThemMode("light")
   }

   const darkTheme=()=>{
    setThemMode("dark")
   }
   // Actually ma kaya ya method hona sa toggle karna sa, unsa kam nahi hoga automatically Html ka andhar inject ho jaygi 




   // actual change in Theme by claasic js sa hi karni padti ha 

   useEffect(() => {
     document.querySelector('html').classList.remove("light","dark")
     document.querySelector('html').classList.add(themeMode)
   }, [themeMode])
   



  return (
<ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
              
          </div>

          <div className="w-full max-w-sm mx-auto">
           <Card/>

              
          </div>
      </div>
  </div>
</ThemeProvider>
  
  )
}

export default App
