import React from 'react'
import Newsboy from '../assets/newsboy.png';

const News = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={Newsboy} alt="Newsboy Icon" className="w-[400px] mx-auto my-4 md:py-10"/>
        <div className='flex flex-col justify-center'>
            <p className='text-[#E8C547] font-bold'>EXTRA! EXTRA!</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>The Local News Problem</h1>
            <p>Often called "the bible of democracy", local newspapers are the watchdogs that hold our civic institutions accountable. Over <span className='text-[#E8C547]'>1 in 5 papers</span> has closed over the the last decade, leaving thousands of communities at risk of becoming news deserts. <span className='text-[#E8C547]'>Half of the 3,145 counties</span> in the country have only one newspaper and almost 200 counties have no newspaper at all. Why? Well, because the share of U.S. adults who pay attention to local news has dropped dramatically over the past decade. Nearly 78% of U.S. adults paid attention to local news in 2016 with the number nearing <span className='text-[#E8C547]'>50%</span> in 2024.</p>
            <br />
            <p>Our solution? Paperboy: a personalized newsletter that gives you to top 5 local stories of the day. Regardless of whether you live in Grand Rapids, MI or Elko, NV, the Paperboy newsletter will be delivered to your inbox every morning, giving you the chance to catch up on local headlines before you finish your first coffee of the day. We aim to help more citizens stay informed about important community issues while increasing engagement/viewership for local news outlets.</p>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3 text-[#E8C547]'>Our Algorithm</button>
        </div>
      </div>
    </div>
  )
}

export default News