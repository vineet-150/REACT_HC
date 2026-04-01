import { useState } from "react"
import Btn from "./components/btn";

function App() {
  const [color,setColor]=useState("#F9D0CD");

     

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor:color}}
      // ya inline css ha
      >
        <h1 className="text-center text-white text-3xl">Color Switcher By using React </h1>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-[#FAFFCB] px-3 rounded-3xl py-2">

              <Btn color="Red" setColor={setColor} />
             <Btn color="Blue" setColor={setColor} />
                <Btn color="Green" setColor={setColor} />


                <Btn color="Yellow" setColor={setColor} />
                <Btn color="Black
                " setColor={setColor} />

                <Btn color="Pink" setColor={setColor} />
                <Btn color="Orange" setColor={setColor} />

                <Btn color="Purple" setColor={setColor} />
                <Btn color="Magenta" setColor={setColor} />
                <Btn color="Brown" setColor={setColor} />
                <Btn color="gold" setColor={setColor} />


            </div>

        </div>


    </div>

    
    
  )
}

export default App
