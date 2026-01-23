import React from 'react'

function Item() {
  return (
    <div className='w-full lg:w-4/5 h-contain flex shadow-2xl overflow-x-auto whitespace-nowrap cursor-pointer'>
      <div className='h-50 w-2/5 md:w-1/5 overflow-x-auto whitespace-nowrap'>
        <img className="h-full w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrJdGipClm62DOZinainwZBReiiI2PR_09Zw&s"/>
      </div>
      <div className='p-3'>
        <div className='text-2xl md:text-3xl font-bold text-pink-500 mb-1'>Black and White Sketch</div>
        <div className='text-blue-500 mb-2'>Girl Vibes painting</div>
        <div className='font-bold text-xl'>4 stars</div>
        <div className='text-gray-500 mb-2'>1k+ people bought in past month</div>
        <div className='text-xl md:text-2xl font-bold '>Rs 500</div>
        <div>Delivery <span className='font-bold'>Mon, 26 Jan</span></div>
        <div className='mt-5'>
            <button className='bg-blue-500 text-white p-2 md:p-3 rounded-xl'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Item
