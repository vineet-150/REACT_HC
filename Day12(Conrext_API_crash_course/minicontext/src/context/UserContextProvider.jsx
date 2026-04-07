import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{

    const [user,setUser]=React.useState(null)

// UserContext → dabba (box)
// UserContext.Provider → dabbe me data daalne wala
// useContext → dabbe se data nikalna


// children = jo bhi components tum wrapper ke andar likhte ho

// <h1>Hello</h1>
// <Login />
// <Profile />

// 👉 Ye sab milke ban jaate hain children


    return(
        <UserContext.Provider value={{user,setUser}}> 
            {children }
        </UserContext.Provider>



    )



}
// aak method ha -> jasa humna outlet wala concept padha tha same usi thara jo bhi prop aa raha ha ussa use kar loo

export default UserContextProvider


// JO bhi prop ka {children} raha ha unha as it is use karlo,
// children koi magical nahi hota ha jisa div warga deta ho wahi children ha, children aak genric name ha jo bhi aap ka pass aa raha ha usko aga pass kar do, as such ya jaruri nahi iska name children hi da   