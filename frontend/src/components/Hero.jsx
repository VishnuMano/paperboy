import React, { Fragment, useState } from 'react'
import { ReactTyped } from "react-typed";
import SubscribeModal from './SubscribeModal';

const Hero = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <Fragment>
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
            <p className='md:text-2xl text-xl text-gray-500'>A 5-headline newsletter that gives you all the local updates you need 🗞️</p>
            <button onClick={() => setShowModal(true)} className='bg-[#E8C547] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#000300]'>Subscribe</button>
            <SubscribeModal isVisible={showModal} onClose={() => setShowModal(false)}>
              <div className="py-6 px-6 lg:px-8 text-left">
                <h3 className="mb-4 text-xl font-medium text-gray-900">
                  Join the Paper Route 🤓
                </h3>
                <form action="#" className="space-y-6">
                  <div>
                    <label for="fname" className="block mb-2 text-sm font-medium text-gray-900">
                      First Name
                    </label>
                    <input 
                      type="fname"
                      name="fname"
                      id="fname"
                      className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5' placeholder="Uncle"
                      required  
                    />
                    <label for="lname" className="block mb-2 text-sm font-medium text-gray-900">
                      Last Name
                    </label>
                    <input 
                      type="lname"
                      name="lname"
                      id="lname"
                      className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5' placeholder="Sam"
                      required  
                    />
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900">
                      Email
                    </label>
                    <input 
                      type="email"
                      name="email"
                      id="email"
                      className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5' placeholder="name@company.com"
                      required  
                    />
                    <label for="city" className="block mb-2 text-sm font-medium text-gray-900">
                      City
                    </label>
                    <input 
                      type="city"
                      name="city"
                      id="city"
                      className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5' placeholder="Buckhead"
                      required
                    />
                    <label for="state" className="block mb-2 text-sm font-medium text-gray-900">
                      State
                    </label>
                    <input 
                      type="state"
                      name="state"
                      id="state"
                      className='my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black-500 focus:border-black-500 block w-full p-2.5' placeholder="GA"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-[#E8C547] rounded-md font-medium my-6 mx-auto px-4 py-2 text-[#000300]"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </SubscribeModal>
        </div>
    </div>
    </Fragment>
  )
}

export default Hero