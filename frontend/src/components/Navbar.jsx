import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = ({ scrollToNews, scrollToTeam, scrollToSupport }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#E8C547]'>PAPERBOY</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Subscribe</li>
        <li className='p-4 cursor-pointer' onClick={scrollToNews}>Problem</li>
        <li className='p-4 cursor-pointer' onClick={scrollToTeam}>Team</li>
        <li className='p-4 cursor-pointer' onClick={scrollToSupport}>Support</li> {/* Scroll to Support */}
        <a href="https://github.com/VishnuMano/paperboy"><li className='p-4'>Code</li></a>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#E8C547] m-4'>PAPERBOY</h1>
        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={scrollToNews}>PROBLEM</li>
        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={scrollToTeam}>TEAM</li>
        <li className='p-4 border-b border-gray-600 cursor-pointer' onClick={scrollToSupport}>SUPPORT</li> {/* Scroll to Support */}
        <li className='p-4 border-b border-gray-600'>CODE</li>
      </ul>
    </div>
  );
};

export default Navbar;
