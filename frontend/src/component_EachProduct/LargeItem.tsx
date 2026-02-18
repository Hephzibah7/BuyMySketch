import React from 'react'

function LargeItem() {
  return (
    <div className='w-full'>
      <div className='h-contain '>
      <div className='mt-5 p-5 h-contain'>
        <div className='mt-5 h-contain text-gray-500'>Computers & Accessories›Accessories & Peripherals›Keyboards, Mice & Input Devices›Keyboards</div>
        <div className='w-full grid h-contain grid-cols-5 mt-5 p-5 gap-5'>
            <div className='w-full col-span-2 '>
                <img className="rounded-2xl w-full h-full" src="https://m.media-amazon.com/images/I/91DjR0pzSIL._AC_UF894,1000_QL80_.jpg" />
            </div>  
            <div className='w-full h-contain bg-gray-400 rounded-lg p-5 col-span-2 '>
              <div className='flex justify-between w-full'>
                <div className='font-bold text-4xl'>Product Title</div>
                <div>share</div>
              </div>
              <div className=''>
                Artist-Hephzibah Ranjan
              </div>
              <div>Silver Badge</div>
              <div className="font-bold text-3xl mt-10">Rate</div>
              <div className='mt-10'>
              About this item
            </div>
            </div>
            
         
          <div className='border border-gray-500 rounded-lg p-5'>
            <div className='font-bold text-3xl '>
              Rate
            </div>
            <div>Free delievery By</div>
            <div>Address location</div>
            <div className='mt-10'>
              <div>
                Retailers
              </div>
            </div>
            <div className='mt-10'>
              <div>Quantity</div>
              <select className='border p-2 border-black rounded-xl w-full mt-2'>
                <option>1</option>
              </select>
            </div>
            < div className='mt-10 flex flex-col gap-2'>
                <button className='w-full p-2 bg-black text-white rounded-xl'>Add to cart</button>
                <button className='w-full p-2 bg-gray-500 text-white rounded-xl'>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
       
      </div>
    </div>
  )
}

export default LargeItem
