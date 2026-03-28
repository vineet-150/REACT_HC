import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // react gives the special methods that is called hooks form this data is updated.
  // In React, Hooks are special functions that let you use features like state, lifecycle, and more inside functional components.
  // There are various types of hooks.
  //1)useContext
  //2)useState
  //3)useReducer
  //4)useEffect
  //5)useMemo


// each hook perform only a particular task. (Itna hi kamm karta ha jada kamm nahi karta  haa aak task aak hi function sa karaoo)

  // aak hooks ka use 
  // hooks ko padhna bhi aana chiya aur usecase bhi aana chiyaa

  let [counter,setCounter]=useState(15)//responible for changing state-> change ka matlab ya nahi ha value change kar di, iss change to propagate kiya jata ha app ka  UI ka andhar/DOM ka andhar. 

  // 0index -> counter

  //1 index -> function -> its a method which controlling the counter varibale.

  // merko pura webpage ma ya variale (counter) uko update kar do.



  //let counter=15;// ya ui ma update nahi hoga



  const addValue=()=>{
    if(counter==20){
      alert("Your are click more then 20");
      return;


    }

   
    setCounter(counter+1);// new value bataoo jo counter ka andhar daluuu.

  }
// click to hua but change nahi huaa UI par. 

// problem aa rahi ha UI updation ma-> yahi pa react ki major power aati ha. 
// aak button ka click kar sa kafi jadha updation ho rahio ha.
// react is reacting on updation of variables.
// UI updatation is controlled by react.





const remValue=()=>{
  if(counter==0){
    alert("you are less then 0"
    );

    return;

    
   


  }
    console.log("value added",Math.random());
    setCounter(counter-1);

  }
  

  return (
    <>
     <h1> chai aur react </h1>
     <h2>
      Counter value:{counter}
     </h2>
     <button onClick={addValue}> Add value {counter}</button>
     <br />
     <button  onClick={remValue}>Remove value {counter}</button>

     <p> Footer: {counter}</p>


    </>
  )
}

export default App
