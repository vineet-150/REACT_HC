import { useState,useCallback,useEffect,useRef} from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);

  const [password,setPassword]=useState("");

  ////useRef-> Jab huma kisi bhi chiz ka reference lena hota ha then we use Useref hook this is the basic and perfect  defination of it.

  const passwordRef=useRef(null)





  // chaya to hum koi pass bhi da sakta ha but hum generate karigaa.This is the different mechanism when the page is loaded automatically some functionality will run fit the data into the password then as the page is loaded then the automaticlly added into the UI.

//   useCallback function ko memoize karta hai
// Matlab:

// Har render pe naya function banane ke bajaye
//Same function reuse karega jab tak dependencies change na ho

// Ye dependencies array hai

// Iska matlab:

// Jab bhi length change hoga → function recreate hoga
// numberAllowed change → recreate
// charAllowed change → recreate
// setPassword change → (normally nahi hota, but safe to include)

  const passwordGenerator=useCallback(
    ()=>{
      let pass=""
      let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberAllowed) str+="0123456789"
      if(charAllowed) str+="`~!@#$%^&*()_-=+{}[]"

      for(let i=0; i<length ;i++){
      let randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }
    setPassword(pass);
    }
    , [length,numberAllowed,charAllowed,setPassword])

   const copyPasswordToClipboard=useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,999);
      window.navigator.clipboard.writeText(password)

      // ma core react ka andhar kam kar raha ha isliya window likh pa raha hu kuki recat compile hogi JS ka andhar jaha bhi run hogi waha window object hoga but agar aap yahi cheej nextjs ka andhar banigaa to waha hti ha server side rendering -> server par window object nhai hota 


    },[password])

  // length,numberAllowed,charAllowed,setPassword ya dependencies ha jinka basis par hum chizo ko chnage karigaa inka ka basis par re-render hoga ya function
  
  
  useEffect(()=>{

    passwordGenerator();


  },  [length,numberAllowed,charAllowed,passwordGenerator])


  // useEffect ko phir sa run kar dunga agar dependencies ko chad deta ha too

  //useCallback function ka run karna ka liya responsible nahi ha usko memoization karta ha cache karta ha iska jo callBack ha  aur dependencies ha usko useEffect sa compare mat karna ya useCallback ha hum wo wo chiza deta ha jispa dependencies ha aap ki aur possible run noga, aksa bhi app method ko optimize karlo us method ka da raha ha, inhsa kuch bhi change aur hamara method phir sa run dubra sa usko optimize kar lo. useEffect ma hum optimization ki baat kar raha ha.

  // useEffect->isma hum ya baat kar raha ha agar dependencies ma kuch bhi change ho to Dubara sa run kar do

  

  //useRef-> Jab huma kisi bhi chiz ka reference lena hota ha then we use Useref hook this is the basic and perfect  defination of it.






  return (

    <>
   
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-8 text-orange-500 bg-gray-800'>
       <h1 className='text-white text-center text-2xl '>Password Generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden my-3 bg-white'>
         <input type="text" 
         value={password}
         className="outline-none w-full py-1 px-3" 
         placeholder="Password"
         readOnly
         ref={passwordRef}
        />
        
        <button className='outline-none bg-blue-700 text-white px-3  py-0.5 shrink-0 hover:bg-amber-400' onClick={copyPasswordToClipboard}>copy</button>
       </div>
       <div className='flex text-sm gap-x-2' >
       <div className='flex item-center gap-x-1'>

        <input 
        type="range" 
        min={6}
        max={100}
        value={length}
        id="abc"
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)
        }}

        />
        <label htmlFor="abc">Lenght: {length}</label>

       </div>
       <div className='flex items-center gap-x-1'>
        <input type="checkbox"
               Checked={numberAllowed}
               id="numberInput"
               onChange={()=>{
                setNumberAllowed((prev)=>!prev);

               }}
         />
         <label htmlFor="numberInput">Numbers</label>

       </div>

        <div className='flex items-center gap-x-1'>
        <input type="checkbox"
               Checked={charAllowed}
               id="charInput"
               onChange={()=>{
                setCharAllowed((prev)=>!prev);

               }}
         />
         <label htmlFor="charInput">Characters</label>

       </div>

       </div>

       

     


    </div>




     

    </>
  )
}

export default App
