'use client';
import React from 'react'

const Purches = () => {
  const handlePurchase=()=>{
    console.log("click in purchase button")
  }
  return (
    <div className=''> 
      <div className='flex justify-center items-center min-h-screen'>
       <div className='bg-gradient-to-r from-blue-500 to-green-500 rounded-lg  flex justify-center items-center'>
          <button onClick={handlePurchase} className='text-white px-10 py-5 text-2xl font-bold text-center'>Purchase</button>
       </div>
      </div>
    </div>
  )
}

export default Purches