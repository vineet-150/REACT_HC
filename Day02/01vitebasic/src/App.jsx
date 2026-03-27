import Chai from "./Chai"
// App aak function ha jo jsx return kar sahah ha 

function App() {

  //injecting the variable in react

  const username="Vineet kumar chauhan";

  

  return (
    //<chai/>
    // <h1> chai aur code</h1>  error -> JSX is enclosed in only one element. We can export only one elemnt means  its a rule of jsx we can returning only one element. There are many ways to retunning the one element is make one div <> <>
     <div>

       <Chai/>
       <h1> we are inside one element that is div </h1>
       <h2> we returning only one element, aak ka andhar bhoot shara element ho sakta haa </h2>

       <h3> Hey i ma {username} </h3>  

       {/* treat as variable 
       {username} isko bol ta ha expression aur ya ha evaluated expression means-> we are not writting js we are writting the final outcome of java script */}

       {/* return ka andhar if ,loop ,evaluation nahi kar ta wo hum function sa phela ya phir return sa phela kar ta ha iska andhar final evaluation kar taa haa */}

    </div>
  )
}

export default App
