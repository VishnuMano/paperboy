import React from 'react'
import Vishnu from '../assets/vishnu.jpeg';
import Krishna from '../assets/krishna.jpeg';

const Team = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
          <p className='md:px-5 text-[#E8C547] font-bold'>THE TEAM</p>
          <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Vishnu Mano</h1>
          <p className='md:px-5 text-white'>Vishnu is co-founder and CEO of Paperboy. He is currently studying Computer Science, Mathematics, and City Planning at Georgia Tech. Prior to building Paperboy, Vishnu worked in ML research (Rank One Computing, Center for Spatial Planning Analytics and Visualization), transportation tech (Spotter, ValetMate), and venture capital (Valor Ventures), gaining experience in development, management, investment, and research. Vishnu has also gained national recognition as a public speaker (National Speech and Debate Association), interfaith leader (Parliament of The World's Religions), and entrepreneur (founding a startup featured by Yahoo Finance).</p>
          <a href="https://www.linkedin.com/in/vishnumano/"><button className='md:mx-5 bg-[#E8C547] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Connect</button></a>
        </div>
      <img src={Vishnu} alt="Vishnu Profile" className="w-[400px] mx-auto my-4 md:py-10"/>
      </div>

      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img src={Krishna} alt="Krishna Profile" className="w-[400px] mx-auto my-4 md:py-10"/>
        <div className='flex flex-col justify-center'>
          <h1 className='md:px-5 md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white'>Krishna Mano</h1>
          <p className='md:px-5 text-white'>Krishna is co-founder and COO of Paperboy. As a junior at City High School (in Grand Rapids, MI), he is passionate about bringing together interfaith youth voices in his community as founder of the Global Citizens Assocation and an Interfaith Leadership Scholar at The Kaufman Interfaith Institute. Krishna is also a nationally acclaimed public speaker as a National Speech & Debate Champion, specializing in Public Forum Debate and Extemporaneous Speech. He also hosts a current-events talk show called The Take with Krishna Mano, which covers various social, political, and economic headlines from around the world and has amassed over 50,000 views on Youtube.</p>
          <a href="https://www.youtube.com/@TheTakeWithKrishnaMano"><button className='md:mx-5 bg-[#E8C547] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Connect</button></a>
        </div>
      </div>
    </div>
  )
}

export default Team