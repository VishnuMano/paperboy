import React from 'react';

const Support = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='md:px-5 text-[#E8C547] font-bold'>SUPPORT LOCAL NEWS</p>
          <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black'>Donate to Our Cause</h1>
          <p className='md:px-5 text-black'>We are entirely community funded, meaning that our only revenue to fund our mission to revive public interest in local news comes from you. Our newsletter is entirely free for all our readers. We only ask that you consider donating to our cause to help cover maintenance and upkeep costs. Thank you and remember, your support is fuelling the future of local news 🚀.</p>
          <a href="https://www.linkedin.com/in/vishnumano/"><button className='md:mx-5 bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-[#E8C547]'>Connect</button></a>
        </div>
      <img src="../assets/vishnu.jpeg" alt="Vishnu Profile" className="w-[400px] mx-auto my-4 md:py-10"/>
    </div>
    </div>
    
    /* <div className='w-full py-[5rem] px-4 bg-white flex flex-col items-center'>
      <p className='md:px-5 text-[#E8C547] font-bold text-center'>SUPPORT LOCAL NEWS</p>
      <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-black text-center'>Donate To Our Cause!</h1>
      <div className='md:max-w-[700px] sm:max-w-[400px] mx-auto flex'>
        <p className='md:px-5 text-black text-center'></p>
      </div>
    </div> */
  )
}

export default Support