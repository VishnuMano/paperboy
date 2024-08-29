import React from 'react'
import { ReactTyped,Typed } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#E8C547] font-bold p-2'>DELIVERED TO YOUR INBOX DAILY</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Local News Redefined.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl py-4'>Top stories from</p>
                <ReactTyped
                    strings={['Grand Rapids, MI', 'Atlanta, GA', 'Chicago, IL', 'San Mateo, CA', 'Orlando, FL', 'Charleston, SC', 'Tulsa, OK']}
                    typeSpeed={100} 
                    backSpeed={80} 
                    loop
                    className='md:text-4xl sm:text-3xl text-xl pl-2 text-[#E8C547]'
                />
            </div>
            <p className='md:text-2xl text-xl text-gray-500'>Stay updated on issues that affect your community.</p>
            <button className='bg-[#E8C547] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#000300]'>Subscribe</button>
        </div>
    </div>
  )
}

export default Hero