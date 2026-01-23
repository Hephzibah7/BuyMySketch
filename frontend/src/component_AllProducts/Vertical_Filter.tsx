import React from 'react'

function Vertical_Filter() {
  return (
    <div>
      <div className='p-3 flex flex-col gap-4'>
        <div>
            <h2 className='font-bold'>Deals & Discounts</h2>
            <div className='mt-2'>Deals of the Day</div>
        </div>
         <div>
            <h2 className='font-bold'>Delivery Day</h2>
            <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Get it by Tomorrow</div>
            </div>
        </div>
         <div>
            <h2 className='font-bold'>Price</h2>
             <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Upto Rs900</div>
            </div>
             <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Rs900 to Rs1600</div>
            </div>
             <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Rs1600 to Rs2100</div>
            </div>
             <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Above 2100</div>
            </div>
        </div>
        <div>
            <h2 className='font-bold'>Customer Reviews</h2>
            <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>Above 4 stars</div>
            </div>
            <div className='flex gap-2 mt-2'>
                <input type="checkbox" className='p-2'/>
                <div>3 stars to 4 stars</div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Vertical_Filter
