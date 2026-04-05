import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData]=useState([])
    const data=useLoaderData() 
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/vineet-150').then(response=>response.json()).then(data=>{
    //         console.log(data); 
    //         setData(data)
    //     })

    // },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-black p-4 text-3xl flex flex-col  gap-6 justify-center items-center'>Github Follower:{data.followers}

    <img src={data?data.avatar_url:"NO found"} alt="Gitu Picture " width={300}/>
    
    </div>
  )
}

export default Github


export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/vineet-150')

    return response.json()
}