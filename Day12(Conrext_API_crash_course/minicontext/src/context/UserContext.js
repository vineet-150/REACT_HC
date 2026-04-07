import React from "react";


// hum ya context do file ka andhar banigaa
 const UserContext=React.createContext()// ya aak methoda ha 
// React.createContext() → ek global data container banata hai
// Isko tum kisi bhi component me access kar sakte ho (without props)
export default UserContext;

// context aak major cheej dega provider, context ha kaya variable provide hi to kar raha ha

{/* 
    <UserContext>
    <Login/>
    <card/>
        <Data>
    <card/>

<UserContext/> 
*/}

// Jasa hi mana wrap kara diya Iss thara sa UserContext ka andhar to wasa hi wa banjaydga provider.Provider sa mera ya matlab ha, aab koi bhi iska andhar component ha unn shaara component ko iss global usercontext ka acces mil jaygaa.
//context ko global varibale ka thara mano issa jada kuch nahi ha 

// UserContext ban gaya to uska baad provider bhi bana padta haa, for providing the data

// top level par usecontext ko laga dinga aur jska andhar jitna bhi component ha wo component directly useContext ka through shari state ka access la sakta. 