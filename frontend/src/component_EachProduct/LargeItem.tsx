import React from 'react'

function LargeItem() {
  return (
    <div className='w-full'>
      <div className='h-contain '>
      <div className='mt-5 p-5 h-contain'>
        <div className='mt-5 h-contain text-gray-500'>Computers & Accessories›Accessories & Peripherals›Keyboards, Mice & Input Devices›Keyboards</div>
        <div className='grid h-contain grid-cols-3  mt-5 p-5 '>
          
          <div className='grid grid-cols-5 col-span-2 gap-8'>
            <div className='col-span-3'>
                <img className="rounded-2xl" src="https://m.media-amazon.com/images/I/91DjR0pzSIL._AC_UF894,1000_QL80_.jpg" />
            </div>
            <div className='w-full h-contain bg-blue-500'>
              <div className='flex w-full'>
                <div className='font-bold text-4xl'>Product Title</div>
                <div>share</div>
              </div>
              <div className='text-blue-500'>
                Artist-Hephzibah Ranjan
              </div>
              <div>Silver Badge</div>
            </div>
          </div>
          <div className='bg-pink-500'></div>
        </div>
      </div>
       
      </div>
    </div>
  )
}

export default LargeItem
