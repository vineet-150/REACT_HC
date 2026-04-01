import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj={
    username:"hitesh",
    age:21
  }
  let newArr=[1,2,3]


  return (
    <>
      <div className="flex flex-col justify-center items-center  bg-black">
    <h1 className="bg-green-400 text-xl text-black p-4 rounded-xl ">
      Tailwind test
    </h1>
  <Card username="hitesh" txt="hitesh choudhary official channel "/>
  {/* with the help of components we can use its multiple time */}
  {/* if you want any chnage in the card then with the help props you can change it  */}


  <Card  username="chaiaurcode" />

   
    </div>
    </>
  )
}

export default App
