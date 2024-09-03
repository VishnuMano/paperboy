import React from 'react'

const SubscribeModal = ( {isVisible, onClose, children} ) => {
  if (!isVisible) {
    return null;
  }

  const handleClose = (e) => {
    if( e.target.id === 'wrapper' ) onClose();
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id="wrapper" onClick={handleClose}>
      <div className='md:w-[600px] w-[300px] flex flex-col'>
        <button className="text-white text-xl place-self-start" onClick={() => onClose()}>←</button>
        <div className='rounded-xl bg-white text-black'>{children}</div>
      </div>
    </div>
  )
}

export default SubscribeModal