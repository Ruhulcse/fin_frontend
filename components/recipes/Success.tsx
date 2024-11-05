import React from 'react'
import { FaCheck } from 'react-icons/fa';
const Success = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
        <div className=' flex  justify-center items-center gap-3'>
            <FaCheck className='  bg-green-700 rounded-full text-4xl ' />
            <h1 className='text-green-700 font-semibold text-4xl '>Payment succesfull</h1>
        </div>
        <div className='flex justify-center items-center pt-3'>
            <p className='text-black text-2xl font-semibold'>Thank you! Your payment has been received.</p>
        </div>
        <div className=' flex justify-center items-center pt-10'>
            <input type="email" name="" id="" className='mt-10  w-96 rounded-tl-lg rounded-bl-lg px-4 py-2 bg-gray-300 text-black placeholder:text-gray-700' placeholder='Plese enter your email'/><button className='bg-gradient-to-tr mt-10 px-4 py-2 from-sky-700 to-sky-500 rounded-tr-lg rounded-br-lg'>Submit</button>
        </div>
    </div>
  )
}

export default Success