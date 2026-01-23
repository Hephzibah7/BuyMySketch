import React from 'react'
import Navbar from './Navbar'
import Horizontal_Filter from './Horizontal_Filter'
import Vertical_Filter from './Vertical_Filter'
import All_Items from './All_Items'
const Product = () => {
  return (
    <div>
      <div className='w-full'>
        {/* <Navbar/> */}
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
            <div className='mt-5'>
              <h1 className='font-bold text-3xl'>Results</h1>
              <h2 className='font-bold text-blue-500'>Check each product page for their details</h2>
            </div>
            <div className='mt-5'>
              <All_Items/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Product;
