import React from 'react';

const Support = () => {
  return (
    <div className='w-full py-[5rem] px-4 bg-white flex flex-col items-center'>
      <p className='md:px-5 text-[#E8C547] font-bold text-center'>SUPPORT LOCAL NEWS</p>
      <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black text-center'>Donate To Our Cause!</h1>
      <div className='md:max-w-[700px] sm:max-w-[400px] mx-auto flex'>
        <p className='md:px-5 text-black text-center'>We are entirely community funded, meaning that our only revenue to fund our mission to revive public interest in local news comes from you. Our newsletter is entirely free for all our readers. We only ask that you consider donating to our cause to help cover maintenance and upkeep costs. Thank you for considering this request and please remember, your support is fueling the future of local news 🚀.</p>
      </div>
      <a href="https://www.linkedin.com/in/vishnumano/"><button className='md:mx-5 bg-black w-[200px] rounded-md font-medium mt-10 px-6 py-3 text-[#E8C547]'>Contribute</button></a>
    </div>
  )
}

export default Support