import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){// MyApp akk function haa

    return (
        <>
        <h1> custom app !</h1>
        </>// iss syntax ko convert karna ka kamm bhi bundler ka hi hota ha react ko html wala syntax samj nahi aata to ya iss convert kar deta haa
        // JSX-> mixing ko js in html
        
        // is pura syntax ki hoti ha parsing iss syntax ka andhar
    //      type:'a',
    // props:{
    //     href:'https://google.com',
    //     target:'_blank'
    // },
    // children: 'Click me to Visit google'

    )



}

// important -> Myapp ka andhar jo bhi likh ta ho wo end of the day kuch iss format ma banjata ha to ma ya khna chata hu agar ma agar ma directly issa yaha rakh du to wo bhi to kahi na kahi run hona chiya issma 

// const ReactElemnt={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     childer:'click me to visit google'
// }// Jo bhi ma Myapp ka andhar likta hu wo parse hota ha iss format ka andhar to ma agar  method ka jagha direct assa kar du to and  transpiler ya compiler ka aak step bacha duu  usko direct hi obejct pass kar duu Ya bhi to run ho jana chiya thaa

// next element 
const anotherElemnt=(
    <a href="https://google.com" target='_blank'>Visit google</a>
);
 
 

const anotherUser="chai aur code";


const Reactelement = React.createElement(
  'a',
  { href:'https://google.com', target: '_blank'},
  'Click me to visit Google baba',
  anotherUser

);// hum react ka hisab sa bana raha haa special syntax haa

// Note -> jab shara tree baan jata haa huska baad variable aat haa final evaluted expression add hotaha ya huma if,loop,evalution karna sa rook ta ha due to its syntax.

 

// object -> that added the properties

createRoot(document.getElementById('root')).render(

    // <MyApp/> //ya  aap aak function ha -> But this syntax is JSX syntax here this syntax came -> har react aak bundler use karta ha abhi bunddler ha vite bhi aak bundler use karta ha(Bundler ka kam kaya hota ha behind the scene magic karna-> syntax ko sudhar na,syntax ko upgrade karna  )

    //  MyApp() asa likna nahi ha beacuse optimization and code comvention ma problem ho sakti ha

    // ReactElement ko directly yaha rakh duu to wo bhi run hona chiya 

    // <ReactElemnt />// actually ma problem ya hui ya function expect kiya gaya hoga  usiki parsing hoti. object thodi na aasa execute hota haa.

    // Object ko assa Thodi use kiya jata ha parenthesies ka sath object ko too Directly use kiya jata ha. 

    // ReactElemnt

    // Ya abhi bhi nahi chala because-> iska picha bhoot important reason ha -> RecactElemnt aak custom react tha iska liya custom render bhi lika tha alag sa but yaha par to mana koi custom render ka code nahi likha, Ya par to ya render ha react na likha ha kuyi ya method to ya kis type ka paramerter aspect kar raha ha aap saa.This the major reason ya code ku nahi chal raha aap saa. 
    // anotherElemnt
    
    Reactelement

    // <App/>
     
      




)
