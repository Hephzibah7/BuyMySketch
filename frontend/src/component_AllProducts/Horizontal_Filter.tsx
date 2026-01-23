import React from 'react'

function Horizontal_Filter() {
  return (
    <div className='flex md:hidden'>
      <div className='w-full flex gap-2 overflow-x-auto whitespace-nowrap p-3 h-contain shadow-2xl text-blue-500'>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Popular</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'><span>4 stars</span> & Up</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Today's Deal</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Up to Rs900</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Rs900 to Rs1,600</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Rs1,600 to Rs2,100</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Above Rs2,100</button></div>
        <div><button className='p-2 border border-pink-500 rounded-2xl'>Get it by Tomorrow</button></div>



      </div>
    </div>
  )
}

export default Horizontal_Filter
