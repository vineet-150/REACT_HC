import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)


  // Important Interview Question -> They we gave u to make the appication for counter button hit for increment and button is fod decrement.(common question)

  const addvalue=function(){
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);

    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);

    // aak click ma aak hi chnage hoga.
    // usestate akya kaya karta ha batches ma kam karta ha reactfiber ki madhat sa -> same hi to kam ha 
    // jitna bhi state hoti ha wo aak function hi ha jo ki function return kartha 
    // jab call back sa sath aata ha to wo pura complete hon ka baad aata ha pura 

  }
  const remvalue=function(){
    setCounter(counter-1);

  }


  return (
    <>
    <h1>chai aur react interview counter</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addvalue}> ADD Value</button>
    <br/>
    <button onClick={remvalue}>REMOVE  Value</button>

    <p> footer:{counter}</p>







      
        
    </>
  )
}

export default App
