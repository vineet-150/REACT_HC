import Chai from "./Chai"

function App() {
  

  return (
    //<chai/>
    // <h1> chai aur code</h1>  error -> JSX is enclosed in only one element. We can export only one elemnt means  its a rule of jsx we can returning only one element. There are many ways to retunning the one element is make one div <> <>
     <div>

       <Chai/>
       <h1> we are inside one element that is div </h1>
       <h2> we returning only one element, aak ka andhar bhoot shara element ho sakta haa </h2>

    </div>
  )
}

export default App
