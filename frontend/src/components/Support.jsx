import React from 'react';

const Support = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white flex flex-col items-center'>
      <p className='md:px-5 text-[#E8C547] font-bold text-center'>SUPPORT LOCAL NEWS</p>
      <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black text-center'>Contribute!</h1>
      <div className='md:max-w-[700px] sm:max-w-[400px] mx-auto flex'>
        <p className='md:px-5 text-black text-center'>Paperboy is entirely community-funded. This means that our mission to keep local journalism alive depends on the generosity of people like you. We’re committed to making our newsletter free for everyone, ensuring that access to local news isn’t limited by financial barriers.

By supporting Paperboy, you’re not just helping to keep a newsletter alive. You are championing the idea that local voices matter and making sure that your community has a platform to share its stories, celebrate its triumphs, and navigate its challenges.

We’re asking you to stand with us in this effort 🚀.</p>
      </div>
      <div className='flex justify-center'>
      <a href="https://donate.stripe.com/test_28o9BXeg1bipecg288"><button className='sm:mx-3 md:mx-5 bg-black w-[200px] rounded-md font-medium mt-10 px-6 py-3 text-[#E8C547]'>Donate Now</button></a>
      <a href="https://github.com/VishnuMano/paperboy"><button className='sm:mx-3 md:mx-5 bg-black w-[200px] rounded-md font-medium mt-10 px-6 py-3 text-[#E8C547]'>Source Code</button></a>
      </div>
    </div>
  )
}

export default Support