import React, { Component } from 'react'

function Card({username,txt="ya humna delafult value da di  ha agar humna value pass nahi ki to ya  chal jaygaa"}) {

    
    // ma aak Component sa  dursa Component ma value pass kar sakta hu, agar uss value muja  recieve karna to card ka andhar muja jab bhi ya function Declare kar raha hu ka andhar props ka  access hota  ha.


  return (
      

     <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
          <p className="text-gray-400">
            {txt}
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          {username}
        </button>
      </div>
    </div>
  )
}

export default Card