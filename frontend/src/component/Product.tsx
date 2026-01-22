import React from 'react'
import Navbar from './Navbar'
import Horizontal_Filter from './Horizontal_Filter'
import Vertical_Filter from './Vertical_Filter'
const Product = () => {
  return (
    <div>
      <div className='w-full'>
        <Navbar/>
        <div className='w-full h-contain p-3 shadow-2xl'>
          1-16 of over 30000 results for <span className='text-blue-500'>"black and white sketch"</span>
        </div>
        <div>
          <Horizontal_Filter/>
        </div>
        <div className='p-2 md:flex w-full'>
          <div className='hidden md:flex md:w-1/5'>
            <Vertical_Filter/>
          </div>
          <div className='w-full md:w-4/5'>
            hi
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Product;
